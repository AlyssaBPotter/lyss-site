import React from "react";
import { Link } from "react-router-dom";
import logo from "../content/images/Lyss-Headerv2.png";
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import social from "../data/socialMedia";
import wattpad from "../utils/icons/wattpad-black-transparent.png";

const Header = () => {
  return (
    <div className="site-header">
      <nav>
        <div className="header-navigation">
          <div className="header-nav-left">
            <ul className="navbar-options">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-logo">
            <img className="site-logo" src={logo} alt="Alyssa Potter Header" />
          </div>
          <div className="header-nav-right">
            <ul className="navbar-options">
              <li>
                <Link to="/books" className="link">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/upcoming" className="link">
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="nav-social">
        <li>
          <a href={social.twitterX} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands fa-x-twitter" className="social-icons twitter" />
          </a>
        </li>
        <li>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands fa-instagram" className="social-icons instagram" />
          </a>
        </li>
        <li>
          <a onClick={CopyEmail} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-regular fa-envelope" className="social-icons envelope" />
          </a>
        </li>
        <li>
          <a href={social.wattpad} target="_blank" rel="noopener noreferrer">
            <img src={wattpad} className="social-icons wattpad socbar" alt="W" />
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
