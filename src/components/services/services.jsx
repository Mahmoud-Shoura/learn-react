// import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Conducting thorough research to understand the needs.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Creating wireframes and prototypes to visualize.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p> Designing visually appealing interfaces.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Defining how users interact with the interface.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Conducting usability tests with real users to evaluate.</p>
            </li>
          </ul>
        </article>
        {/* ُEnd Of UX/UI */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p> Creating the visual and interactive parts of websites.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Ensuring that websites adapt and display.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Implement responsive design for optimal viewing across devices.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Optimizing websites for speed and efficiency.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Integrate animations and transitions for enhanced user
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Using version control systems like Git to manage code changes.
              </p>
            </li>
          </ul>
        </article>
        {/* ُEnd Of web Development */}
        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Conducting thorough research to understand the target.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Developing high-quality, engaging.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Optimizing content for search engines.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Strategically promoting content through various channels.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Monitoring and analyzing the performance.</p>
            </li>
          </ul>
        </article>
        {/* ُEnd Of Content Creation */}
      </div>
    </section>
  );
};

export default services;
