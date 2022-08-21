import React from "react";
import github from '../images/github.png'
import linked from '../images/linkedin.png'
import email from '../images/emailicon.png'

function Footer() {
    return (
      <footer>
        <ul className="foot-links">
          <li className="foot-link">
            <a href="https://github.com/cpaschall ">
                <img src={github} alt="github" width="50" height="50" />
            </a>
          </li>
          <li className="foot-link">
            <a href="https://linkedin.com/in/calvin-paschall">
                <img src={linked} alt="linkedin" width="50" height="50" />
            </a>
          </li>
          <li className="foot-link">
            <a href="https://twitter.com/calpaschall/">
                <img src={email} alt="email" width="50" height="50" />
            </a>
          </li>
        </ul>
      </footer>
    )
};

export default Footer;