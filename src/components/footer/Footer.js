import React from "react";

import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/shan-e-haider-bukhari-66316526/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <img src={Linkedin} className="img-linkedin" alt=""></img>
        </a>
      </div>

      <div>
        <a
          href="https://github.com/shanhaider23"
          rel="noopener noreferrer"
          target="_blank"
        >
          Designed and developed by: Shan-e-Haider Bukhari
        </a>
      </div>
      <div>
        <a
          href="https://haider-portfolio.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <img src={Github} className="img-github" alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
