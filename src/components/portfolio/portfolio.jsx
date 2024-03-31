// import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Edusity.png";
import IMG2 from "../../assets/Autumn.png";
import IMG3 from "../../assets/shopper-mhs.png";
import IMG4 from "../../assets/tailwind-project.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/Gym-Website.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "University Website Edusity",
    github: "https://github.com/Mahmoud-Shoura/Edusity",
    demo: "https://edusity-dc265.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Autumn Shoping Website only front-end",
    github: "https://github.com/Mahmoud-Shoura/Ecommerce-Shop",
    demo: "https://autumn-ee78e.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Full E-commerce Front-end",
    github: "https://github.com/Mahmoud-Shoura/full-e-commerce",
    demo: "https://shopper-mhs.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Tailwind-Project",
    github: "https://github.com/Mahmoud-Shoura/tailwind-1",
    demo: "https://tailwind-project-mhs.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16541289-Orion-UI-Kit-Charts-templates-infographis-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribble.com/shots/15887665-Orion-UI-Kit-Charts-templates-infogaphics-in-Figma",
  },
  {
    id: 7,
    image: IMG7,
    title: "Gym Website",
    github: "https://github.com",
    demo: "https://danger-gym-6fd24.web.app/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
