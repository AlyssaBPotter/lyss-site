import React from "react";
import { useParams, useEffect } from "react-router-dom";
import books from "../data";

const BookPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  // const [firstChapter, setFirstChapter] = useState('');

  // useEffect(() => {
  //   const fetchFirstChapter = async () => {
  //     try {
  //       const response = await fetch(`/chapters/${book.firstChapter}`);
  //       const text = await response.text();
  //       setFirstChapter(text);
  //     } catch (error) {
  //       console.error('Error loading first chapter:', error);
  //     }
  //   };

  //   fetchFirstChapter();
  // }, [book]);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <div className="book-prev-container">
        <h1>{book.title}</h1>
        <div className="book-cover">
          <img src={book.cover} alt={book.title} />
        </div>
        <p style={{ whiteSpace: 'pre-line' }}>{book.description}</p>
      </div>
      <div>
        <h2>First Chapter</h2>
        <pre>{book.firstChapter}</pre>
      </div>
    </div>
  );
};

export default BookPage;
