import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets1/avatar1.jpg";
import AVTR2 from "../../assets1/avatar2.jpg";
import AVTR3 from "../../assets1/avatar3.jpg";
import AVTR4 from "../../assets1/avatar4.jpg";

// import swiper core and requried modular

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper Style
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Iron Man",
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Molestiae est recusandae earum placeat cumque voluptas,
     quos explicabo quo illo esse id vel porro suscipit sunt excepturi
      reiciendis fugit blanditiis saepe.`,
  },
  {
    avatar: AVTR2,
    name: "Bat Man",
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Molestiae est recusandae earum placeat cumque voluptas,
     quos explicabo quo illo esse id vel porro suscipit sunt excepturi
      reiciendis fugit blanditiis saepe.`,
  },
  {
    avatar: AVTR3,
    name: "SpiderMAn",
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Molestiae est recusandae earum placeat cumque voluptas,
     quos explicabo quo illo esse id vel porro suscipit sunt excepturi
      reiciendis fugit blanditiis saepe.`,
  },
  {
    avatar: AVTR4,
    name: "Superman",
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Molestiae est recusandae earum placeat cumque voluptas,
     quos explicabo quo illo esse id vel porro suscipit sunt excepturi
      reiciendis fugit blanditiis saepe.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
