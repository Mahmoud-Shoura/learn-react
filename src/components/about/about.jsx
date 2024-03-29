// import React from "react";
import "./about.css";
import ME from "../../assets/IMG_20231213_134339.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worledwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            I am a passionate individual embarking on a journey to master
            front-end development. With a keen eye for design and a fascination
            for user interfaces, he is diving headfirst into the world of HTML,
            CSS, and JavaScript. i am understands the importance of creating
            seamless user experiences and is eager to learn the latest
            frameworks and libraries such as React. Armed with determination and
            a hunger for knowledge, he spends hours honing his skills,
            experimenting with code, and building projects to showcase his
            progress.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
