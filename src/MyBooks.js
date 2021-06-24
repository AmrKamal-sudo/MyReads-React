import React from 'react';
import { Link } from 'react-router-dom';
import Shelves from './Shelves';

class MyBooks extends React.Component {
  render() {
    const { bookStatus, books, onUpdate } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookStatus.map(shelf => (
              <Shelves key={shelf.key} shelf={shelf} books={books} onUpdate={onUpdate} />
            ))}
          </div>
        </div>
        <div className="open-search">
     <Link to="search">
       <button>Add a Book</button>
     </Link>
        </div>
      </div>
    );
  }
}

export default MyBooks;