import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import books from "../data";

const BookPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  const [firstChapter, setFirstChapter] = useState('');

  // Fetch the text from the firstChapter text file for the current book (file set in the data.js file)
  useEffect(() => {
    const fetchFirstChapter = async () => {
      try {
        const response = await fetch(book.firstChapter);
        const text = await response.text();
        setFirstChapter(text);
      } catch (error) {
        console.error('Error loading first chapter:', error);
      }
    };

    fetchFirstChapter();
  }, [book]);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-page">
      <div className="book-prev-container">
        <h1 className="book-title">{book.title}</h1>
        <div className="book-preview">
            <div className="book-cover">
                <img src={book.cover} alt={book.title} />
            </div>
            <div className="book-info">
               <p style={{ whiteSpace: 'pre-line' }}>{book.description}</p> {/* the styling allows \n and whitespace line breaks  */}
              <p className="content-warning">
                &#9888; Warning: Mature Content
                <br />
                &copy; All Rights Reserved
              </p>
            </div>
          </div>
      </div>
      <div>
        <p style={{ whiteSpace: 'pre-line' }} className="chapter-preview">{firstChapter}</p>
      </div>
    </div>
  );
};

export default BookPage;
