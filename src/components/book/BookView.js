import React from 'react';

const BookView = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.cover} alt={book.title} />
      <p>{book.description}</p>
      <h3>Chapters</h3>
      <ul>
        {book.chapters.map((chapter, index) => (
          <li key={index}>{chapter.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookView;
