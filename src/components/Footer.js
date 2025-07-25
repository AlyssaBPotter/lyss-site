import React from "react";
import { Link } from "react-router-dom";
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import social from "../data/socialMedia";
import wattpad from "../utils/icons/wattpad-black-transparent.png";

const Footer = () => {
  return (
    <div className="app-footer">
      <hr />
      <nav>
        <div className="footer-navigation">
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
      </nav>
      <ul className="nav-social">
        <li>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
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
      <p className="copyright">
        © 2023 Alyssa Potter. Website developed by{" "}
        <a href="https://npotter.com/" target="_blank" rel="noopener noreferrer">
          npotter.com
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
