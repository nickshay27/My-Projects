import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets1/me.png";
import HeaderSocial from "./HeaderSocial";
import Nickpic from "../../assets1/Nickshay 2.jpg";
const Header = () => {
  return (
    <header>
      <div className="container herader__container">
        <h5>Hello I'm</h5>
        <h1>Nickshay Chouhan</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Nickpic} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
