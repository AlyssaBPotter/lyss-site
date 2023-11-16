import React from "react";
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import social from "../data/socialMedia";
import wattpad from "../utils/icons/wattpad-white-transparent.png";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div>
        <h2 className="page-title">About Alyssa</h2>
      </div>

      <div className="about-row">
        <div className="about-text">
          <p>
            Welcome to the captivating world of Alyssa B. Potter, an author whose poignant stories
            delve into romance, tragedy, loss, and the captivating realm of college sports. Alyssa's
            writing style beautifully captures the raw emotions of love, leaving a lasting impact on
            readers. Her tales of romance explore the complexities of the human heart, forging
            unexpected connections that resonate long after the final page. In addition to romance,
            Alyssa skillfully weaves narratives of tragedy and loss, illuminating the resilience of
            the human spirit. Through her empathetic storytelling, she offers solace and inspiration
            to those who have weathered life's storms. With a particular focus on college sports,
            especially college hockey, Alyssa brings to life the exhilaration, camaraderie, and
            challenges faced by athletes both on and off the ice. Her passion for the game shines
            through in her vivid descriptions and dynamic storytelling. Drawing inspiration from the
            sun-soaked landscapes of Southern California, Alyssa's writing embraces emotional depth,
            palpable chemistry, and heartfelt authenticity. Her stories transport readers to a world
            where love, tragedy, and the pursuit of dreams intertwine, leaving an indelible mark on
            their hearts. Step into Alyssa Potter's captivating literary universe, where love
            conquers all, tragedy shapes lives, and the spirit of college sports illuminates the
            human experience. Prepare to be enthralled by her masterful storytelling and
            unforgettable characters.
          </p>
        </div>

        <div className="about-social-container">
          <ul>
            <li className="about-social-icon">
              <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-x-twitter" className="social-icons twitter" />
              </a>
            </li>
            <li className="about-social-icon">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-instagram" className="social-icons instagram" />
              </a>
            </li>
            <li className="about-social-icon">
              <a onClick={CopyEmail} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-regular fa-envelope" className="social-icons envelope" />
              </a>
            </li>
            <li className="about-social-icon">
              <a href={social.wattpad} target="_blank" rel="noopener noreferrer">
                <img src={wattpad} className="social-icons wattpad" alt="W" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
