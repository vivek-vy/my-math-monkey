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
                      <img src={balloon} alt="balloon" />
                    </div>
                    <div style={{ marginTop: "-50px",marginRight:"20%" }}>
                      <img src={doll} alt="doll" />
                    </div>
                  </div>
                  <div className="px-5 fw-normal ">
                    <p className="m-0"
                      style={{
                        color: "#33A1FF",
                        fontSize: "24px",
                        fontFamily: "Yusei Magic",
                      }}
                    >
                      {slide.heading}
                    </p>
                    <span className="m-0"
                      style={{
                        color: "#333333",
                        fontSize: "70px",
                        fontWeight: "700 ",
                        lineHeight:"normal"
                      }}
                    >
                      {slide.subheading}
                    </span>
                    <p 
                      style={{
                        color: "#F62023",
                        fontSize: "18px",
                        fontWeight: "700",
                        
                      }}
                    >
                      {slide.description}
                    </p>
                    <div className="mt-4"><CommonButton btnText={slide.btnText} /></div>
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
