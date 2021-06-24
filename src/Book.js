import React from 'react';
import ArrangeBooks from './ArrangeBooks';




const Book = ({ book, shelf, onUpdate }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: 'icons/book-placeholder.svg'})`}}
        />
        <ArrangeBooks book={book} shelf={shelf} onUpdate={onUpdate} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(', ') : 'Unknown Author'}
      </div>
    </div>
  </li>
);

export default Book;