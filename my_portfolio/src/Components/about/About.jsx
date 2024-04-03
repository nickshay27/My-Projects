import React from "react";
import "./about.css";
import ME from "../../assets1/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { PiFolderNotchOpenLight } from "react-icons/pi";

const about = () => {
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About ME</h2>

      <div className=" container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <LuUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ more clients</small>
            </article>
            <article className="about__card">
              <PiFolderNotchOpenLight className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            provident veritatis quas autem odit fugit, velit delectus dolorem
            error corrupti assumenda cum saepe harum! Porro velit nisi doloribus
            consequuntur. Quae.
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
