import React from "react";
import "../../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
					<h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>lary page</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  voluptatum placeat vero non suscipit dolorem, magnam dolores,
                  sapiente numquam modi quos provident perspiciatis. Omnis
                  dolore ex, cumque mollitia aliquam in.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>lary drag</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  voluptatum placeat vero non suscipit dolorem, magnam dolores,
                  sapiente numquam modi quos provident perspiciatis. Omnis
                  dolore ex, cumque mollitia aliquam in.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4>gigi hadid</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  voluptatum placeat vero non suscipit dolorem, magnam dolores,
                  sapiente numquam modi quos provident perspiciatis. Omnis
                  dolore ex, cumque mollitia aliquam in.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide__item">
                <div className="slide__img-04">
                  <img src={avatar02} alt="" />
                </div>
                <h4>lary page</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  voluptatum placeat vero non suscipit dolorem, magnam dolores,
                  sapiente numquam modi quos provident perspiciatis. Omnis
                  dolore ex, cumque mollitia aliquam in.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
