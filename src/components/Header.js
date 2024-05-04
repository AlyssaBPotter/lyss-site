import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../content/images/Lyss-Headerv2.png";
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../utils/icons/fontawesome";
import social from "../data/socialMedia";
import wattpad from "../utils/icons/wattpad-black-transparent.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="site-header">
      {/* Mobile Menu Button */}
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <Icon icon={faTimes} /> // "x" icon when mobile menu is open
        ) : (
          <Icon icon={faBars} /> // bars icon when mobile menu is closed
        )}
      </div>

      <div className="header-logo">
        <img className="site-logo" src={logo} alt="Alyssa Potter Header" />
      </div>
      <nav className="header-navigation">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <Icon icon={faTimes} /> {/* "x" icon to close the mobile menu */}
          </div>
          <ul className="navbar-options">
            <li>
              <Link to="/" className="link" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/books" className="link" onClick={toggleMobileMenu}>
                Books
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="link" onClick={toggleMobileMenu}>
                Upcoming
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <hr />
    </div>
  );
};

export default Header;
