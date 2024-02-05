import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import books from "../data/bookData";

const BookPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  const [firstChapter, setFirstChapter] = useState("");

  // Fetch the text from the firstChapter text file for the current book (file set in the data.js file)
  useEffect(() => {
    const fetchFirstChapter = async () => {
      try {
        window.scrollTo({ top: 0, left: 0 });
        const response = await fetch(book.firstChapter);
        const text = await response.text();
        setFirstChapter(text);
      } catch (error) {
        console.error("Error loading first chapter:", error);
      }
    };

    fetchFirstChapter();
  }, [book]);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-page">
      <h1 className="book-title">{book.title}</h1>
      <div className="preview-container">
        <img className="container-background" src={book.cover} />

        <div className="book-container">
          <div>
            <img className="book-cover-lrg" src={book.cover} alt={book.title} />
          </div>
          <div className="book-info">
            <p className="description" style={{ whiteSpace: "pre-line" }}>
              {book.description}
            </p>{" "}
            {/* the styling allows \n and whitespace line breaks  */}
            <p className="content-warning">
              &#9888; Warning: Mature Content
              <br />
              &copy; All Rights Reserved
            </p>
            {book.platform === "wattpad" && (
              <a href={book.wattpadLink} target="_blank" rel="noopener noreferrer">
                View on WattPad
              </a>
            )}
            {book.platform === "kindle" && (
              <a href={book.kindleLink} target="_blank" rel="noopener noreferrer">
                View on Amazon Kindle
              </a>
            )}
          </div>
        </div>
      </div>
      {book.platform === "wattpad" && (
        <div className="chapter-preview">
          <p style={{ whiteSpace: "pre-line" }} className="chapter-preview">
            {firstChapter}
          </p>
          <a href={book.continueLink} target="_blank" rel="noopener noreferrer">
            Continue Reading
          </a>
        </div>
      )}
    </div>
  );
};

export default BookPage;
