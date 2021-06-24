import React from 'react';
import Book from './Book';

const Results = props => {
  const { booksFound, booksOnShelves, onUpdate } = props;

  const foundBooks = booksFound.map(book => {
    booksOnShelves.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {foundBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onUpdate={onUpdate}
          />
        ))}
      </ol>
    </div>
  );
};

export default Results;