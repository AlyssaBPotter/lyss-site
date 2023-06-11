import React from "react";
import { Link } from "react-router-dom";
import books from "../data";

const BookListPage = () => {



  return (
    <div className="book-list-page">
      <label>Books Page</label>

      {books.map((book) => (
        <div className="book-prev-container" key={book.id}>
          <h2 className="book-title">{book.title}</h2>
          <div className="book-preview">
            <div>
              <Link to={`/book/${book.id}`}>
                <img className="book-cover-med" src={book.cover} alt={book.title} />
              </Link>
            </div>
            <div className="book-info">
               <p style={{ whiteSpace: 'pre-line' }}>{book.description}</p> {/* the styling allows \n and whitespace line breaks  */}
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
      ))}

      {/* <div className="book-prev-container">
        <h2 className="book-title">The Best Thing</h2>
        <div className="book-preview">
          <div className="book-cover">
            <Link to={BookView}>
              <img src="/books/best-thing/Best-Thing.png" alt="The Best Thing Cover" />
            </Link>
          </div>
          <div className="book-info">
            <p>
              Saylor moves to Massachusetts for college with a clean slate after a traumatic past.
              She has all the intentions of starting over, but sometimes things don't always go as
              planned.
              <br />
              But what happens when she meets a blue eyed hockey player and his best friend? Will
              they throw a wrench in her plans or show her an alternative path?
              <br />
            </p>
            <p className="content-warning">
              &#9888; Mature Content: suicide & rape
              <br />
              &copy; All Rights Reserved
            </p>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default BookListPage;
