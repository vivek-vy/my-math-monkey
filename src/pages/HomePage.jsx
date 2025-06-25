import React from "react";
import { SliderHome } from "../components/SliderHome";

import sliderImg1 from "../assets/home-section/slider-img/slider-img-1.png";
import sliderImg2 from "../assets/home-section/slider-img/slider-img-2.png";
import sliderImg3 from "../assets/home-section/slider-img/slider-img-3.png";
import sliderImg4 from "../assets/home-section/slider-img/slider-img-4.png";
import sliderImg5 from "../assets/home-section/slider-img/slider-img-5.png";
import sliderImg6 from "../assets/home-section/slider-img/slider-img-6.png";
import wave from "../assets/home-section/slider-img/bottom1.png";
import kidsImg from "../assets/home-section/adventure/kids.png";
import { Skills } from "../components/small-components/SkillsBox";
import { CommonButton } from "../components/CommonButton";
import mailImg from "../assets/home-section/adventure/mailtele.png";

import vect1 from "../assets/home-section/adventure/Vector(1).png";
import planImg from "../assets/home-section/adventure/monkeywithplan.png";
import bus from "../assets/home-section/slider-img/bus1.png";
import f2 from "../assets/home-section/adventure/f2.png";

import arrow from "../assets/home-section/math-section/Vector-arrow.png";
import math1 from "../assets/home-section/math-section/Group 1686552153.png";
import math2 from "../assets/home-section/math-section/Group 1686552153.png";
import mathbg from "../assets/home-section/math-section/math-bg.png";

// approach section -----------------

import monkey from "../assets/home-section/approach-section/mokey.png";
import aFrame from "../assets/home-section/approach-section/frame.png";
import playImg from "../assets/home-section/approach-section/im11.png";
import learnImg from "../assets/home-section/approach-section/learn-2.png";
import thinkImg from "../assets/home-section/approach-section/think-3.png";
import mathImg from "../assets/home-section/approach-section/math-4.png";
import { OurPillars } from "../components/small-components/OurApprocaches";

// factors bg

import factorsbg from "../assets/home-section/factors/5-factors.png";

// brain thinking section

import brainThinkBg from "../assets/home-section/brain-thnin-section4/brain-bg.png";
import brain from "../assets/home-section/brain-thnin-section4/brain.png";
import bulb from "../assets/home-section/brain-thnin-section4/buld.png";
import nextArrow from "../assets/home-section/brain-thnin-section4/arrownext.png";

export default function HomePage() {
  const contents = [
    {
      img: sliderImg1,
      heading: "Develop Your Child’s Potential with Fun",
      subheading: "Play to Learn",
      description: "Love, 5 Brain Abilities, Possibilities",
      btnText: "Contact Us",
    },
    {
      img: sliderImg2,
      heading: "Develop Your Child’s Problem-solving Skills",
      subheading: "5 Brain Abilities",
      description: "Critical Thinking, Flexible Abilities, Confident",
      btnText: "About Us",
    },
    {
      img: sliderImg3,
      heading: "Develop Your Child’s Problem-solving Skills",
      subheading: "BrainThink Learning",
      description: "Curiosity - > Think - > Learn ",
      btnText: "Events",
    },
    {
      img: sliderImg4,
      heading: "Develop Your Child’s Problem-solving Skills",
      subheading: "Active Learning",
      description: "Discussion, Resourceful, Inspire",
      btnText: "Centers in Asia",
    },
    {
      img: sliderImg5,
      heading: "Develop Your Child's Math Problem-solving Skills",
      subheading: "Vedic Math",
      description: "Creative, Simplified, Fast",
      btnText: "Contact Us",
    },
    {
      img: sliderImg6,
      heading: "Develop Your Child's Math Skills at home",
      subheading: "Exciting Online Live Learning",
      description: "Interactive, Engaging, Fun",
      btnText: "Vedic math",
    },
  ];

  // skills  section --------------->
  const skillsArray = [
    { number: 1, Bg: "#33A1FF", skillsText: "5 Brain Abilities" },
    { number: 2, Bg: "#FFC300", skillsText: "BrainThink Learning " },
    { number: 3, Bg: "#FF6900", skillsText: "Active Learning " },
    { number: 4, Bg: "#5DA33C", skillsText: "Vedic Math" },
  ];

  return (
    <div className="">
      <hr className="m-0" style={{ color: "#33A1FF" }} />
      <section className=" slider-section position-relative">
        <SliderHome contents={contents} />
        <div className="bottom-wave w-100">
          {" "}
          <img
            src={wave}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />{" "}
        </div>
      </section>

      {/* -------------------- adventure section  ---------------------- */}

      <section
        className="math-adventure position-relative "
        style={{ padding: "7rem  2px" }}
      >
        <div className="mt-sm-5" style={{ marginBottom: "-150px" }}>
          <img src={vect1} alt="vector-img" />
        </div>
        <div className="px-4 d-flex flex-column align-content-center justify-content-center flex-sm-row gap-5 py-5">
          <div className=" text-end position-relative me-sm-5">
            <img src={kidsImg} alt="kids" width={"100%"} />
            <span
              className="position-absolute  "
              style={{ right: "31%", bottom: "-65px" }}
            >
              <img src={planImg} alt="monkeyPlan" width={"100%"} />{" "}
            </span>
          </div>

          <div
            className="adventure-contents d-flex gap-4 flex-column py-3 "
            style={{ maxWidth: "700px" }}
          >
            <div className="heading-description">
              <h5
                className="fw-normal"
                style={{ color: "#33A1FF", fontFamily: "Yusei Magic" }}
              >
                Children Will Love Math At Math Monkey!
              </h5>
              <h2 className="fw-bold fs-1">
                Welcome To The World Of Math Adventures!
              </h2>
              <p className="fw-medium fs-6">
                Our Play to learn approach integrates Vedic Math principles,
                helping children grasp concepts faster and with greater
                confidence, facilitated by BrainThink Learning to develop 5
                brain abilities and MathBrain capabilities. At Math Monkey, math
                isn’t just a subject but it’s an adventure! Let your child play,
                explore, and love math like never before!
              </p>
            </div>
            <div
              className="skills-box"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minMax(310px,1fr))",
                gap: "20px 25px",
                maxWidth: "650px",
              }}
            >
              {skillsArray.map((skill, index) => {
                return (
                  <Skills
                    key={index}
                    circleBg={skill.Bg}
                    number={skill.number}
                    skillsText={skill.skillsText}
                  />
                );
              })}
            </div>
            <hr />
            <div className="d-flex flex-column flex-sm-row gap-5 align-items-center">
              <div>
                <CommonButton btnText={"About Us"} />
              </div>
              <div className="d-flex gap-3">
                <span>
                  <img
                    className="border  p-2 rounded-circle"
                    src={mailImg}
                    alt="mail"
                  />
                </span>
                <div>
                  <strong className="fw-bold">Have Questions? Email Us</strong>
                  <p className="text-decoration-underline fw-medium">
                    funmath@mathmonkey.asia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute left-0" style={{ bottom: "0px" }}>
          <img src={f2} alt="" width={"100%"} />
        </div>
        <div
          className="position-absolute "
          style={{ bottom: "100px", right: "15%" }}
        >
          <img src={bus} alt="" width={"100%"} />
        </div>
      </section>

      {/* two types of kids section  */}

      <section
        className=" math-love-section d-flex flex-wrap w-100 justify-content-center align-content-center"
        style={{
          backgroundImage: ` url(${mathbg}) `,
          backgroundSize: "cover",
          height: "900px",
        }}
      >
        <div className="d-flex flex-column gap-sm-5">
          <h4
            className=" math-heading text-center fw-bold  "
            style={{
              color: "#FFFFFF",
              fontSize: "xxx-large",
              lineHeight: "58px",
            }}
          >
            Discover the Two Types of <br /> Kids at Math Monkey Center
          </h4>

          <div
            className="d-flex w-100 flex-column flex-sm-row justify-content-between align-items-center"
            style={{ gap: "100px" }}
          >
            <div>
              <img src={math1} alt="love-math" />
            </div>
            <div className="flex-column justify-content-center  d-none d-sm-flex ">
              <span className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="204"
                  viewBox="0 0 2 204"
                  fill="none"
                >
                  <path
                    d="M1 0V204"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeDasharray="16 16"
                  />
                </svg>
              </span>
              <span className="text-center">
                <img src={arrow} alt="" />
              </span>
            </div>
            <div>
              <img src={math2} alt="want-to-love-math" />
            </div>
          </div>
        </div>
      </section>

      {/* math-monkey approach  section */}

      <section className="mathmonkey-approach px-sm-5 px-3 pb-5">
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <img className="hanging-monkey" src={monkey} alt="monkey" />

          <div className="description col-12 col-sm-6 mt-sm-5 pt-sm-5 fw-medium text-center">
            <p className="" style={{ fontSize: "30px" }}>
              At Math Monkey, our BrainThink instructors integrate the 4 Pillars
              (Play, Learn, Think, Math) to create an engaging and dynamic
              learning experience.
            </p>
          </div>
          <img src={aFrame} alt="frame" />
        </div>
        <div className="pillars d-flex flex-column flex-sm-row justify-content-evenly align-items-center gap-5 ">
          <div style={{ marginTop: "10%" }}>
            <OurPillars
              img={playImg}
              heading={"Play"}
              description={
                " At Math Monkey, our BrainThink instructors integrate the 4 Pillars (Play, Learn, Think, Math) to create an engaging and dynamic learning experience."
              }
            />
          </div>

          <div>
            <OurPillars
              img={playImg}
              heading={"Play"}
              description={
                " At Math Monkey, our BrainThink instructors integrate the 4 Pillars (Play, Learn, Think, Math) to create an engaging and dynamic learning experience."
              }
            />
          </div>

          <div style={{ marginTop: "10%" }}>
            <OurPillars
              img={playImg}
              heading={"Play"}
              description={
                " At Math Monkey, our BrainThink instructors integrate the 4 Pillars (Play, Learn, Think, Math) to create an engaging and dynamic learning experience."
              }
            />
          </div>
          <div>
            <OurPillars
              img={mathImg}
              heading={"Math"}
              description={
                " At Math Monkey, our BrainThink instructors integrate the 4 Pillars (Play, Learn, Think, Math) to create an engaging and dynamic learning experience."
              }
            />
          </div>
        </div>
      </section>

      {/* factors section  */}

      <section
        className="factors d-flex align-content-center justify-content-center"
        style={{
          backgroundImage: `url(${factorsbg})`,
          backgroundSize: "100% 100%",
          minHeight: "500px",
        }}
      >
        <div
          className="text-center d-flex align-content-center flex-column justify-content-center gap-4 "
          style={{ maxWidth: "800px" }}
        >
          <h4 className=" factor-heading fw-bold" style={{ fontSize: "50px " }}>
            5 WOW Factors make Math Monkey unique!
          </h4>
          <p className="factors-description fs-6 fw-medium">
            We cultivate negotiation skills with   "Save, Spend, Earn" stickers,
            encourage strategic thinking with interactive play, and    help
            children think outside the box with early exposure to Vedic Math.
            Join us and watch your child thrive in math with a whole new
            perspective!
          </p>
        </div>
      </section>

      {/* brain thinking learning section */}

      <section
        className="text-center"
        style={{
          backgroundImage: `url(${brainThinkBg})`,
          minHeight: "1000px",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="" >
          <div>
            <h4>BrainThink Learning</h4>
          </div>
          <div>
            <strong>Children</strong>
            <div>
              {" "}
              <img src={brain} alt="brain" />{" "}
            </div>
            <p>
              when triggered by <br />
              <span> CURIOSITY</span>
            </p>
          </div>
          <div>
            <strong>Then they LEARN</strong>
            <div>
              {" "}
              <img src={bulb} alt="brain" />{" "}
            </div>
            <p>
              by understanding <br />
              <span> WHY</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
