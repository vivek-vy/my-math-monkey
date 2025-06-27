import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../../styles/HomeStyle.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftStar from "../../assets/home-section/vedic-math-section/left-star.png";
import rightStar from "../../assets/home-section/vedic-math-section/right-star.png";

export const MathCarousel = ({ contents = [], CardComponent , visibleSlides }) => {
  const sliderRef = useRef(null);
  const [activeButton, setActiveButton] = useState("prev");

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: visibleSlides || 4,
    slidesToScroll: 4,
    dots: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div >
      <Slider {...settings} ref={sliderRef}>
        {contents.map((item, index) => {
          return (
            <div key={index}>
              <CardComponent {...item} />
            </div>
          );
        })}
      </Slider>

      <div className="custom-dots d-flex justify-content-center align-items-center gap-3 mt-5 ">
        <div className="arrow-stars">
          <img
            onClick={() => {
              sliderRef.current.slickPrev();
              setActiveButton("prev");
            }}
            src={leftStar}
            alt="left star"
          />
        </div>

        <button
          onClick={() => {
            sliderRef.current.slickPrev();
            setActiveButton("prev");
          }}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: activeButton === "prev" ? " #FF6900" : "#ccc",
            border: "none",
            cursor: "pointer",
          }}
        ></button>

        <button
          onClick={() => {
            sliderRef.current.slickGoTo(0);
            setActiveButton("mid");
          }}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: activeButton === "mid" ? "#FF6900" : "#ccc",
            border: "none",
            cursor: "pointer",
          }}
        ></button>

        <button
          onClick={() => {
            sliderRef.current.slickNext();
            setActiveButton("next");
          }}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: activeButton === "next" ? "#FF6900" : "#ccc",
            border: "none",
            cursor: "pointer",
          }}
        ></button>

        <div className="arrow-stars">
          <img
            onClick={() => {
              sliderRef.current.slickNext();
              setActiveButton("next");
            }}
            src={rightStar}
            alt="right star"
          />
        </div>
      </div>
    </div>
  );
};
