// import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com" target="__blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Mahmoud-Shoura" target="__blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="__blank">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
