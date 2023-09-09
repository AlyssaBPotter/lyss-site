import React from "react";
import { Link } from "react-router-dom";
import books from "../data/bookData";
import SwiperCarousel from "../components/SwiperCarousel";

const BookListPage = () => {
  return (
    <div className="book-list-page">
      <h1 className="page-title">Alyssa's Stories</h1>

      {books.map((book) => (
        <div className="book-list">
          <div className="book-prev-container" key={book.id}>
            <h2 className="book-title">{book.title}</h2>
            <div className="book-preview">
              <div>
                <Link to={`/book/${book.id}`}>
                  <img className="book-cover-med" src={book.cover} alt={book.title} />
                </Link>
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
                <Link to={`/book/${book.id}`}>
                  <label>Read More</label>
                </Link>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BookListPage;
