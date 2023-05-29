import React from "react";

const BooksPage = () => {
  return (
    <div>
      <div>
        <label>Books Page</label>
      </div>
      <div className="book-prev-container">
        <h2>The Best Thing</h2>
        <div className="book-preview">
          <div className="book-left">
            <img src="/book-covers/Best-Thing.png" alt="The Best Thing Cover" />
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
      </div>

      <div className="book-prev-container">
        <h2>Every Little Thing</h2>
        <div className="book-info">
          <p>
            Blake Hallows has faced more trauma in her twenty two years than most people face their
            entire life. From losing her mom to cancer, to her high school sweetheart their second
            year of college in a terrible accident. Death has basically become numbing to her. But,
            with only a couple years left of college she has come to realize that she missed out on
            a lot. So, she makes a pact with herself to finally step out of her comfort zone and
            enjoy the time she has left.
            <br />
            <br />
            Ryder Alexander transfers over to UCSD his senior year which is highly unusual. He was
            offered the position as a starting quarterback because it’s number two in state and
            reluctantly accepted. The Aztecs lost their quarterback a couple years prior and have
            been using their backup but the team hasn’t been doing well. So Ryder is brought in to
            try and make a difference. What he doesn’t expect is to meet a blonde beauty who
            completely sweeps him off of his feet.
            <br />
            <br />
            Can Blake move on from her tragic past and open up her heart again to someone who might
            just be worthy of it? Or will the demons from her past come back to haunt them both.
            <br />
          </p>
          <p className="content-warning">
            &#9888; Mature Content: suicide & rape
            <br />
            &copy; All Rights Reserved
          </p>
        </div>
        <div className="book-right">
          <img src="/book-covers/Every-Little-Thing.png" alt="Every Little Thing Cover" />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
