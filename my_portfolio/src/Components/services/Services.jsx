import React from "react";
import "./services.css";
import { TbChecks } from "react-icons/tb";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className=" container service__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <TbChecks className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
