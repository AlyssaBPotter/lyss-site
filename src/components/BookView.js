import React from "react";
import books from "../data";

const BookView = () => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {book.firstChapter}
        </div>
      ))}
    </div>
  );
};

export default BookView;
