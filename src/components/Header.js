import React from "react";
import { Link } from "react-router-dom";
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";

const Header = () => {
  return (
    <div className="site-header">
      <nav>
        <div className="header-navigation">
          <div className="header-nav-left">
            <ul className="navbar-options">
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="link">About</Link>
              </li>
            </ul>
          </div>
          <div className="header-nav-logo">
            <img
              className="site-logo"
              src="/assets/Lyss-Headerv2.png"
              alt="Alyssa Potter Header"/>
          </div>
          <div className="header-nav-right">
            <ul className="navbar-options">
              <li>
                <Link to="/books" className="link">Books</Link>
              </li>
              <li>
                <Link to="/upcoming" className="link">Upcoming</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="header-social">
        <li>
          <a href="https://twitter.com/lyssp_writes" target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands fa-twitter" className="social-icons twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/alyssa_writes_things/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="fa-brands fa-instagram" className="social-icons instagram" />
          </a>
        </li>
        <li>
          <a onClick={CopyEmail} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-regular fa-envelope" className="social-icons envelope" />
          </a>
        </li>
        <li>
          <a
            href="https://www.wattpad.com/user/Lyss_Potter20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/wattpad-black-transparent.png"
              className="social-icons wattpad socbar"
              alt="W"/>
          </a>
        </li>
      </ul>
      <hr/>
    </div>
  );
};

export default Header;
