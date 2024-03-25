import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper care and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntdebitis suscipit dolore necessitatibus non soluta a asperiores quisquam, eum atque, fugit dolor cum, libero dolorum enim repellat amet id ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntdebitis suscipit dolore necessitatibus non soluta a asperiores quisquam, eum atque, fugit dolor cum, libero dolorum enim repellat amet id ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntdebitis suscipit dolore necessitatibus non soluta a asperiores quisquam, eum atque, fugit dolor cum, libero dolorum enim repellat amet id ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis",
  },
  {
    avatar: AVTR4,
    name: "Nana Amn McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntdebitis suscipit dolore necessitatibus non soluta a asperiores quisquam, eum atque, fugit dolor cum, libero dolorum enim repellat amet id ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corporis",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
