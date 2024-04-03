import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets1/portfolio1.jpg";
import IMG2 from "../../assets1/portfolio2.jpg";
import IMG3 from "../../assets1/portfolio3.jpg";
import IMG4 from "../../assets1/portfolio4.jpg";
import IMG5 from "../../assets1/portfolio5.png";
import IMG6 from "../../assets1/portfolio6.jpg";

// Do not use the images in production

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & inforgraphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Charts templates & inforgraphics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintain task and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 5,
    image: IMG5,
    title: "Maintain task and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 6,
    image: IMG6,
    title: "Maintain task and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn " target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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

export default Portfolio;
