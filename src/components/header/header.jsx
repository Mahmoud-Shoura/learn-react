// import React from "react";
import ME from "../../assets/me-4.png";
import HeaderSocial from "./HeaderSocials";
import "./header.css";
import CTA from "./cta";

const header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I&rsquo;m</h5>
        <h1>Mahmoud Shoura</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
