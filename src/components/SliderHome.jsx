import React from "react";
import { Carousel } from "react-bootstrap";

import "../styles/HomeStyle.css";

// import firstImg from "../assets/home-section/slider-img/slider-img-1.png";
import { CommonButton } from "./CommonButton";
import balloon from "../assets/home-section/slider-img/hot-air-balloon1.png";
import doll from "../assets/home-section/slider-img/doll1.png";
import bus from "../assets/home-section/slider-img/bus1.png";

export const SliderHome = ({ contents }) => {
  return (
    <Carousel>
      {" "}
      {contents.map((slide, index) => {
        return (
          <Carousel.Item>
            <div
              className="carousel-slide"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <Carousel.Caption key={index} className="custom-caption">
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        className="balloon-img"
                        src={balloon}
                        alt="balloon"
                      />
                    </div>
                    <div className="doll-img">
                      <img src={doll} alt="doll" />
                    </div>
                  </div>
                  <div className="px-sm-5 ps-3 fw-normal ">
                    <p className="m-0 slide-heading">{slide.heading}</p>
                    <span className="m-0 slider-subheading">
                      {slide.subheading}
                    </span>
                    <p className="slider-description fw-bold">
                      {slide.description}
                    </p>
                    <div className="mt-4">
                      <CommonButton btnText={slide.btnText} />
                    </div>
                  </div>
                  <div className="text-end" style={{ marginRight: "25%" }}>
                    <img src={bus} alt="bus" />
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
