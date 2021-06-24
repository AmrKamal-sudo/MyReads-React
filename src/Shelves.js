import React from 'react';
import Book from './Book';




const Shelves = props => {
  const { shelf, books, onUpdate } = props;
  const arrangeBooks = books.filter(book => book.shelf === shelf.key)
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {arrangeBooks.map(book => (
        <Book key={book.id} book={book} shelf={shelf.key} onUpdate={onUpdate} />
         ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelves;