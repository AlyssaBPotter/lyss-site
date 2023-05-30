import React from "react";
import { Link } from "react-router-dom";
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../assets/icons/fontawesome";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-title">
        <h1>Alyssa Potter Writing</h1>
      </div>
      <nav>
        <ul className="navbar-options">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="https://twitter.com/lyssp_writes" target="_blank" rel="noopener noreferrer">
              <Icon icon="fa-brands fa-twitter" className="social-icons twitter socbar" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/alyssa_writes_things/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-brands fa-instagram" className="social-icons instagram socbar" />
            </a>
          </li>
          <li>
            <a onClick={CopyEmail} target="_blank" rel="noopener noreferrer">
              <Icon icon="fa-regular fa-envelope" className="social-icons envelope socbar" />
            </a>
          </li>
          <li>
            <a
              href="https://www.wattpad.com/user/Lyss_Potter20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/icons/wattpad-transparent.png"
                className="social-icons wattpad socbar"
                alt="W"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
