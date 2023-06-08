import React from 'react'
import CopyEmail from "../utils/CopyEmail";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";

const AboutPage = () => {


  return (
    <div>
      <div>
        <label>About Page</label>
      </div>

      <div>
      <ul className="social">
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
                src="../utils/icons/wattpad-transparent.png"
                className="social-icons wattpad"
                alt="W"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage