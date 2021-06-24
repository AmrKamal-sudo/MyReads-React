import React from 'react';
import Results from './Results';
import { Link } from 'react-router-dom';
import Search from './Search';

class BooksFound extends React.Component {
  render() {
    const { booksFound, booksOnShelves, onSearch, onClear, onUpdate } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onClear}>
              Close
            </button>
          </Link>
          <Search onSearch={onSearch} />
        </div>
        <Results
          booksFound={booksFound}
          booksOnShelves={booksOnShelves}
          onUpdate={onUpdate}
        />
      </div>
    );
  }
}

export default BooksFound;