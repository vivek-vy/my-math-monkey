
import React from "react";

import "../../styles/HomeStyle.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import cardbg from "../../assets/home-section/vedic-math-section/carouselCardBg.png";

import s1 from "../../assets/home-section/vedic-math-section/s1.png";
import s2 from "../../assets/home-section/vedic-math-section/s2.png";
import s3 from "../../assets/home-section/vedic-math-section/s3.png";
import s4 from "../../assets/home-section/vedic-math-section/s4.png";

export const ChildGrowthCarousel = () => {
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const contents = [
    {
      img: s1,
      description:
        "Balance your child’s conventional learning skills in schools.",
    },
    {
      img: s2,
      description: "Boost your child’s confidence level in math",
    },
    {
      img: s3,
      description: "Fun ways tolearn math easily.",
    },
    {
      img: s4,
      description:
        "allow your child to use their creativity by exploring the simple.",
    },
    {
      img: s1,
      description: "Fun ways tolearn math easily.",
    },
    {
      img: s2,
      description:
        "allow your child to use their creativity by exploring the simple.",
    },
    {
      img: s3,
      description: "Fun ways tolearn math easily.",
    },
    {
      img: s4,
      description:
        "allow your child to use their creativity by exploring the simple.",
    },
    {
      img: s1,
      description: "Fun ways tolearn math easily.",
    },
  
  ];
  return (
    <Slider {...settings}>
      {contents.map((slide, index) => {
        return (
          <div>
            <div
              className="d-flex gap-4 flex-column align-items-center justify-content-center "
              style={{
                backgroundImage: `url(${cardbg})`,
                backgroundSize: "contain",
                height: "370px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#FF6900",
                  padding: "20px",
                  borderRadius: "50%",
                }}
              >
                <img src={slide.img} alt="" />
              </div>
              <div className="w-50">
                <p style={{fontSize:"20px",fontWeight:"400"}} >{slide.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
