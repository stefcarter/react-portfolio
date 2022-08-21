import React from "react";
import github from '../images/github.png'
import linked from '../images/linkedin.png'
import email from '../images/emailicon.png'

function Footer() {
    return (
      <footer>
        <ul className="foot-links">
          <li className="foot-link">
            <a href="https://github.com/stefcarter?tab=repositories">
                <img src={github} alt="github" width="50" height="50" />
            </a>
          </li>
          <li className="foot-link">
            <a href="https://www.linkedin.com/in/steffan-carter/">
                <img src={linked} alt="linkedin" width="50" height="50" />
            </a>
          </li>
          <li className="foot-link">
            <a href="mailto:xisled09@gmail.com">
                <img src={email} alt="email" width="50" height="50" />
            </a>
          </li>
        </ul>
      </footer>
    )
};

export default Footer;