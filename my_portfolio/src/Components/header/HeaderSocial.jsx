import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="linkedin.com/in/nickshay-chouhan-2537b021a" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/nickshay27" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
