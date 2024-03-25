import React from "react";
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            itaque ipsa consectetur totam eum. At recusandae corrupti maiores,
            aliquam nulla saepe in dignissimos dolorum natus, eius iusto
            mollitia sapiente? Error.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
