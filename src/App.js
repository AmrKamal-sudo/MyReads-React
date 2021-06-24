import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { debounce } from 'throttle-debounce';
import MyBooks from './MyBooks';
import BooksFound from './BooksFound';


const bookStatus = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];



class BooksApp extends React.Component {
  state = {
    booksOnShelves: [],
    booksFound: [],
    notFound: false
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then( book => {this.setState({ booksOnShelves: book });
      })
      .catch( error => {console.log(error);
        this.setState({ notFound: true });
      });
  };

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .catch(error => {console.log(error);
      this.setState({ notFound: true });
    });
    if (shelf === 'none') {
      this.setState(old => ({booksOnShelves: old.booksOnShelves.filter(x => x.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(old => ({
        booksOnShelves: old.booksOnShelves.filter(x => x.id !== book.id).concat(book)
      }));
    }
  };

   //used debounce to make a 500ms delay each callback 
  searchQuery = debounce(500, query => {
    if (query.length !== 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ booksFound: [] });
        } 
        else {
          this.setState({ booksFound: books });
        }
      });
    } 
    else {
      this.setState({ booksFound: [] });
     }
    });

    clearQuery = () => {
      this.setState({ booksFound: [] });
    };






  render() {
    const { booksOnShelves, booksFound } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MyBooks bookStatus={bookStatus} books={booksOnShelves} onUpdate={this.updateBook} />
            )}/>
        
        <Route path="/search" render={() => (
            <BooksFound booksFound={booksFound} booksOnShelves={booksOnShelves} onUpdate={this.updateBook} onSearch={this.searchQuery}  onClear={this.clearQuery} />   
          )}/>
      </div>
    )
  }
}

export default BooksApp
