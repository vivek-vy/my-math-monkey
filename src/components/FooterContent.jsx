import React from "react";

import "../styles/Footer.css";
import { COLORS } from "../styles/themes/Colors.js";
import waveimg from "../assets/footer-img/bottom3.png";
import star from "../assets/footer-img/star-2.png";
import bee from "../assets/footer-img/bee2.png";
import cloud from "../assets/footer-img/cloud.png";
import logo from "../assets/header-images/math-monkey-logo.png";
import { NavLink } from "react-router-dom";
import fb from "../assets/topbar_social-icons/facebook1.png";
import insta from "../assets/topbar_social-icons/instagram1.png";
import youtube from "../assets/topbar_social-icons/youtube1.png";
import lineStar from "../assets/footer-img/line-1.png";
import whatsapp from "../assets/footer-img/Whatsapp.png";
import kid from "../assets/footer-img/girl2.png";
import { CommonButton } from "./CommonButton.jsx";

export const FooterContent = () => {
  return (
    <div className="pb-3 pb-sm-0" style={{ backgroundColor: COLORS.footerBg }}>
      <div className="wave-img">
        <img className="w-100" src={waveimg} alt="wave" />
      </div>

      <div className="d-flex px-3 px-sm-5  flex-column align-items-center flex-lg-row gap-5 gap-sm-0   justify-content-between ">
        <div className="logo mx-sm-5 mt-sm-5 " style={{ width: "250px" }}>
          <span>
            <img
              src={logo}
              alt="logo"
              style={{ width: "238.5px", height: " 159px", objectFit: "cover" }}
            />
          </span>
          <p className="fs-6 fw-semibold ">
            Math Monkey conduct Play to Learn educational math program for
            children 4 to 12 years old.
          </p>
          <CommonButton btnText={"Contact Us"} />
        </div>
        <div
          className="d-flex flex-column w-100  row-gap-5"
          style={{ padding: "0 0 0 5%" }}
        >
          {" "}
          <div className=" d-flex   justify-content-between pe-sm-5 ">
            <div className="small-img" style={{ marginLeft: "6%" }}>
              <img src={star} alt="star" />
            </div>
            <div className="small-img" style={{ marginRight: "-25%" }}>
              <img src={bee} alt="bee" />
            </div>
            <div className="small-img">
              <img src={cloud} alt="cloud" />
            </div>
          </div>
          <div className="d-flex align-items-center flex-wrap flex-column flex-sm-row justify-content-around gap-5">
            <div className="quick-links d-flex flex-column gap-3">
              <div>
                <h4 className="footer-section-title ">Quick Links</h4>{" "}
                <hr className="w-25 opacity-100 m-0 my-2" />
              </div>
              <div className="d-flex " style={{ gap: "5rem" }}>
                <div className="d-flex flex-column ">
                  <NavLink>Home</NavLink>
                  <NavLink>About Us</NavLink>
                  <NavLink>Center in Asia</NavLink>
                  <NavLink>Read book</NavLink>
                  <NavLink>Opportunities</NavLink>
                  <NavLink>Contact Us </NavLink>
                  <NavLink>Cookie Policy </NavLink>
                </div>
                <div className="d-flex  flex-column">
                  <NavLink>Special Events</NavLink>
                  <NavLink>Partnership</NavLink>
                  <NavLink>Career</NavLink>
                  <NavLink>FAQ</NavLink>
                  <NavLink>Privacy Policy </NavLink>
                  <NavLink>Terms Of Use </NavLink>
                  <NavLink>Sitemap </NavLink>
                </div>
              </div>
            </div>
            <div className="programs d-flex flex-column gap-3">
              <div>
                <h4 className="footer-section-title">Programs</h4>{" "}
                <hr className="w-25 opacity-100 m-0 my-2" />
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column">
                  <NavLink>Virtual Class</NavLink>
                  <NavLink>Play To Learn</NavLink>
                  <NavLink>5 Brain Abilities</NavLink>
                  <NavLink>Brainthink Learning</NavLink>
                  <NavLink>Mathbrain</NavLink>
                  <NavLink>Vedic Math </NavLink>
                </div>
              </div>
            </div>
            <div className="follow-us d-flex flex-column gap-3">
              <div>
                <h4 className="footer-section-title m-0">Follow Us</h4>
                <hr className="w-25 opacity-100 m-0 my-2" />
              </div>

              <div className="d-flex">
                <div className="d-flex flex-column">
                  <div className="mb-4 d-flex gap-2">
                    <NavLink>
                      <img src={fb} alt="fb" />
                    </NavLink>
                    <NavLink>
                      <img src={insta} alt="insta" />
                    </NavLink>
                    <NavLink>
                      <img src={youtube} alt="youtube" />
                    </NavLink>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      {" "}
                      <h4 className="footer-section-title ">Email</h4>
                      <hr className="w-25 opacity-100 m-0 my-2" />
                    </div>
                    <p className="fw-semibold fs-6 text-decoration-underline ">
                      enquiry@mathmonkey.asia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex flex-column flex-sm-row px-sm-5   justify-content-between align-items-center align-items-sm-start ">
        <div style={{ marginTop: "-20px" }}>
          <img src={lineStar} alt="star2" />
        </div>
        <div className="kid-block d-flex  justify-content-around ">
          <div className="small-imgv" style={{ marginTop: "-30px" }}>
            <img src={kid} alt="kid" width={"100%"} />
          </div>
          <div className="social-icon">
            <img src={whatsapp} alt="kid" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
