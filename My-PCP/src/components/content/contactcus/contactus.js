import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import data from "../../../database/data";
import "./contactus.css";

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function ContactUs() {
  return (
    <div className='aboutus-advertisement'>
      <h1>Contact Us</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.slides.map((slides) => {
          return (
            <SwiperSlide>
              <img src={slides.img} className="slide-image"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
