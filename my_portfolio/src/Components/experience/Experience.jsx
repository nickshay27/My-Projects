import React from "react";
import "./experience.css";
import { TbDiscountCheckFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>WHat Skills I Havs</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developmwent</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>Next js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>Talwind CSS</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of Front end development */}
        <div className="experience__backend">
          <h3>Backend Developmwent</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbDiscountCheckFilled className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
