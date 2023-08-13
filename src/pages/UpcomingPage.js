import React from "react";
import upcomingBooks from "../data/upcomingData";

const UpcomingPage = () => {
  return (
    <div className="book-list-page">
      <h1 className="page-title">Upcoming Stories</h1>

      {upcomingBooks.map((book) => (
        <div className="upcoming-list">
          <div className="book-prev-container" key={book.id}>
            <h2 className="book-title">{book.title}</h2>
            <div className="book-preview">
                <img className="book-cover-med" src={book.cover} alt={book.title} />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UpcomingPage;
