import React, { useState } from "react";
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

// adventure

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
import bulb from "../assets/home-section/brain-thnin-section4/bulb.png";
import nextArrow from "../assets/home-section/brain-thnin-section4/arrownext.png";
import brainsectionimg from "../assets/home-section/brain-thnin-section4/brain-section-kids.png";

//  math brain section

import mathbrainbg from "../assets/home-section/math-brain-section/math-brain-bg.png";
import brainImg2 from "../assets/home-section/math-brain-section/brain-mid-1.png";
import b1 from "../assets/home-section/math-brain-section/solve-p-1.png";
import b2 from "../assets/home-section/math-brain-section/aproach-22.png";
import b3 from "../assets/home-section/math-brain-section/usingbrain-3.png";

// vedic math section

import sunShape from "../assets/home-section/vedic-math-section/shape-sun.png";
import { MathCarousel } from "../components/small-components/MathCarousel";
import monkey22 from "../assets/home-section/vedic-math-section/monkeyh2.png";
import arrowmath from "../assets/home-section/vedic-math-section/arrowff2.png";
import { AbilitiesBox } from "../components/small-components/AbilitiesBox";

// carousel

import s1 from "../assets/home-section/vedic-math-section/s1.png";
import s2 from "../assets/home-section/vedic-math-section/s2.png";
import s3 from "../assets/home-section/vedic-math-section/s3.png";
import s4 from "../assets/home-section/vedic-math-section/s4.png";

// child abilities

import ab1 from "../assets/home-section/ability-section/cimg1.png";
import ab2 from "../assets/home-section/ability-section/cimg2.png";
import ab3 from "../assets/home-section/ability-section/cimg3.png";
import ab4 from "../assets/home-section/ability-section/cimg4.png";
import ab5 from "../assets/home-section/ability-section/cimg5.png";

import va1 from "../assets/home-section/ability-section/Vector(1).png";
import va2 from "../assets/home-section/ability-section/Vector(2).png";

// our testonomials

import bee2 from "../assets/footer-img/bee2.png";
import pencil from "../assets/home-section/testonomials-img/pencil1.png";
import blue1 from "../assets/home-section/testonomials-img/blue1.png";
import orange2 from "../assets/home-section/testonomials-img/orange2.png";
import black3 from "../assets/home-section/testonomials-img/black3.png";
import { TestonomialCard } from "../components/small-components/TestonomialCard";
import { ChildCard } from "../components/small-components/ChildCard";
import testbg from "../assets/home-section/testonomials-img/testonomial-bg.png";

// lets connect -------- contect section

import monkeyb3 from "../assets/home-section/contact-section/monkey-b3.png";
import vect55 from "../assets/home-section/contact-section/Vectortt55.png";

export default function HomePage() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [contactData, setContactData] = useState([]);

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

  // carousel child content

  const childCarouselContents = [
    {
      img: s1,
      description:
        "Balance your child’s conventional learning skills in schools.",
    },
    { img: s2, description: "Boost your child’s confidence level in math" },
    { img: s3, description: "Fun ways to learn math easily." },
    {
      img: s4,
      description:
        "Allow your child to use their creativity by exploring the simple.",
    },
    { img: s1, description: "Fun ways to learn math easily." },
    {
      img: s2,
      description:
        "Allow your child to use their creativity by exploring the simple.",
    },
    { img: s3, description: "Fun ways to learn math easily." },
    {
      img: s4,
      description:
        "Allow your child to use their creativity by exploring the simple.",
    },
    { img: s1, description: "Fun ways to learn math easily." },
    { img: s1, description: "Fun ways to learn math easily." },
  ];

  // abilities contents

  const abilitiesArray = [
    {
      img: ab1,
      aHeading: "Attention",
      aText: "Gather accurate information from a math problem.",
    },
    {
      img: ab2,
      aHeading: "Visualisation",
      aText: "Know the meaningful relationship between numerical symbols",
    },
    {
      img: ab3,
      aHeading: "Logical Thinking",
      aText: "Figure out different ways of solving problems.",
    },
    {
      img: ab4,
      aHeading: "Memory",
      aText: "Apply appropriate methods or formulae to solve problems.",
    },
    {
      img: ab5,
      aHeading: "Processing Speed",
      aText: "Derive the answer quickly and accurately.",
    },
  ];

  // testonomial contents

  const testonomialContents = [
    {
      img: blue1,
      review:
        "First of all i really love Math Monkey. Teacher Pink was very professional and helpful. The method use during online class was so fun and very... Read More",
      client: "— Mrs Atikah, Gibbon 1, 8 YEARS OLD",
    },
    {
      img: orange2,
      review:
        "Teacher Sky has been a great teacher. Extremely kind and patience when teaching my son. My son loves her teaching and Improved his... Read More",
      client: "— Mrs.Priya – Lemur 1, 8 years old",
    },
    {
      img: black3,
      review:
        "Ibrahim really enjoy the classes with Teacher Yam & his classmate. Thank you for this.  My son now has the interest in math which he previously scared of math",
      client: "— Mrs,Zumalia – Gibbon 1, 9 years old",
    },
    {
      img: orange2,
      review:
        "Teacher Sky has been a great teacher. Extremely kind and patience when teaching my son. My son loves her teaching and Improved his... Read More",
      client: "— Mrs.Priya – Lemur 1, 8 years old",
    },
    {
      img: black3,
      review:
        "Ibrahim really enjoy the classes with Teacher Yam & his classmate. Thank you for this.  My son now has the interest in math which he previously scared of math",
      client: "— Mrs,Zumalia – Gibbon 1, 9 years old",
    },
    {
      img: blue1,
      review:
        "First of all i really love Math Monkey. Teacher Pink was very professional and helpful. The method use during online class was so fun and very... Read More",
      client: "— Mrs Atikah, Gibbon 1, 8 YEARS OLD",
    },
  ];

  // contact form

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactData((pre) => [...pre, inputData]);
    setInputData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="">
      <hr className="m-0" style={{ color: "#33A1FF" }} />
      <section className=" slider-section position-relative">
        <SliderHome contents={contents} />
        <div className="bottom-wave w-100">
          <img src={wave} alt="" style={{ width: "100%", height: "100%" }} />{" "}
        </div>
      </section>
      {/* -------------------- adventure section  ---------------------- */}
      <section
        className="math-adventure position-relative "
        style={{ padding: "3rem  2px" }}
      >
        <div className="mt-sm-5" style={{ marginBottom: "-150px" }}>
          <img src={vect1} alt="vector-img" />
        </div>
        <div className="px-4 d-flex flex-column align-content-center justify-content-center flex-lg-row gap-5 py-5 position-relative z-3">
          <div className=" text-end position-relative me-lg-5">
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
        <div className=" arrow-monkey z-0 bottom-0 left-0">
          <img src={f2} alt="" width={"100%"} />
        </div>
        <div
          className="position-absolute z-0 d-none d-sm-block"
          style={{ bottom: "50px", right: "15%" }}
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

          <div className="d-flex w-100 flex-column flex-sm-row justify-content-between align-items-center gap-lg-5 gap-3">
            <div>
              <img src={math1} alt="love-math" width={"100%"} />
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
              <img src={math2} alt="want-to-love-math" width={"100%"} />
            </div>
          </div>
        </div>
      </section>
      {/* math-monkey approach  section */}
      <section className="mathmonkey-approach px-lg-5 px-3 pb-sm-5">
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <div>
            <img
              className="hanging-monkey"
              src={monkey}
              alt="monkey"
              width={"100%"}
            />
          </div>

          <div className="description col-12 col-sm-6 mt-sm-5 pt-sm-5 fw-medium text-center">
            <p className="fw-medium" style={{ fontSize: "30px" }}>
              At Math Monkey, our BrainThink instructors integrate the 4 Pillars
              (Play, Learn, Think, Math) to create an engaging and dynamic
              learning experience.
            </p>
          </div>
          <div>
            <img src={aFrame} alt="frame" width={"100%"} />
          </div>
        </div>
        <div className="pillars flex-wrap  zigzag-connection-wrapper position-relative d-flex  justify-content-evenly align-items-center gap-5 ">
          <svg
            className="zigzag-line d-none d-lg-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 894 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0 101L284 8L591 135.5L892 0.5"
              stroke="#FF6900"
              strokeOpacity="0.37"
              strokeDasharray="12 12"
              fill="none"
            />
          </svg>

          <div>
            <OurPillars
              img={playImg}
              heading={"Play"}
              description={
                " At Math Monkey, our BrainThink instructors integrate the 4 Pillars (Play, Learn, Think, Math) to create an engaging and dynamic learning experience."
              }
            />
          </div>

          <div style={{ marginTop: "-10%" }}>
            <OurPillars
              img={learnImg}
              heading={" Learn"}
              description={
                " Children explore concepts through hands-on activities, reinforcing understanding and strengthening their MathBrain."
              }
            />
          </div>

          <div>
            <OurPillars
              img={thinkImg}
              heading={"Think"}
              description={
                "Children explore concepts through hands-on activities, reinforcing understanding and strengthening their MathBrain."
              }
            />
          </div>

          <div style={{ marginTop: "-10%" }}>
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
          backgroundSize: "100% 100%",
        }}
      >
        <div className="">
          <div>
            <h4 className="fw-bold mt-5" style={{ fontSize: "50px" }}>
              BrainThink Learning
            </h4>
          </div>
          <div className="d-flex flex-column flex-sm-row  justify-content-evenly gap-5 gap-sm-0 px-sm-5 mt-5 align-items-center">
            <div>
              <strong className="fs-4">Children</strong>
              <div>
                <img src={brain} alt="brain" />{" "}
              </div>
              <p className="fs-5 fw-bold" style={{ marginTop: "-50px" }}>
                when triggered by <br />
                <span className="fs-2" style={{ color: "#33A1FF" }}>
                  {" "}
                  CURIOSITY
                </span>
              </p>
            </div>
            <div className="next-arrow">
              <img src={nextArrow} alt="" />
            </div>
            <div>
              <strong className="fs-5">
                Then they <br />
                <span className="fs-3">LEARN</span>
              </strong>
              <div>
                <img src={bulb} alt="brain" />
              </div>
              <p className="fs-5 fw-bold">
                by understanding <br />
                <span className="fs-3" style={{ color: "#5DA33C" }}>
                  WHY
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 d-flex flex-column align-content-center justify-content-center flex-lg-row gap-5 py-5 text-start">
          <div className=" text-end position-relative me-lg-5">
            <img src={brainsectionimg} alt="kids" width={"100%"} />
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
                Why Choose Play to Learn?
              </h5>
              <h2 className="fw-bold fs-1">
                Did you know that children who interact in diverse play are more
                adaptable in their learning?
              </h2>
              <p className="fw-medium fs-6">
                Playtime is crucial for brain development! Research shows that
                kids who enjoy regular, short bursts of free play are more
                focused during academic tasks. By integrating play into
                learning, we enhance cognitive skills and foster a lifelong love
                for education. Embrace the power of play for a brighter learning
                journey!
              </p>
            </div>
            <hr />
            <div className="d-flex flex-column flex-sm-row gap-5 align-items-center">
              <div>
                <CommonButton btnText={"View more"} />
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
      </section>
      {/* math brain section  */}
      <section
        className="math-brain d-flex flex-column flex-lg-row justify-content-center align-items-center px-sm-5 "
        style={{
          backgroundImage: `url(${mathbrainbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "540px",
          gap: "5rem",
        }}
      >
        <div className="d-flex flex-column gap-3" style={{ maxWidth: "700px" }}>
          <h4 className="fw-bold" style={{ fontSize: "50px" }}>
            What is MathBrain ?
          </h4>
          <div>
            <p className="fw-medium fs-6">
              We cultivate negotiation skills with   "Save, Spend, Earn"
              stickers, encourage strategic thinking with interactive play, and
                 help children think outside the box with early exposure to
              Vedic Math.
            </p>
            <p className="fw-medium fs-6">
              {" "}
              Join us and watch your child thrive in math with a whole new
              perspective!
            </p>
          </div>
          <CommonButton btnText={"View more"} />
        </div>
        <div className="position-relative py-5 w-50 justify-content-center d-flex align-items-center">
          <div className="b1-mathbrain">
            <img src={b1} alt="" />
          </div>
          <div className="brain-img">
            <img src={brainImg2} alt="" />
          </div>

          <div className=" apply-using-brain d-flex flex-column justify-content-between">
            <img className="b2-mathbrain" src={b2} alt="" />
            <img className="b3-mathbrain" src={b3} alt="" />
          </div>
        </div>
      </section>
      {/* vedic math section  */}
      <section className="p-lg-5 p-3 pb-0 ">
        <div>
          <img src={sunShape} alt="" />
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center  px-lg-5 ">
          <div className="ps-sm-5" style={{ maxWidth: "1000px" }}>
            <h4 className="heading-h4 fw-bold  "> What is Vedic Math?</h4>
            <p className="fw-medium">
              Vedic Math is an ancient arithmetic system designed to enhance
              thought processing through simple and efficient techniques. At
              Math Monkey, we integrate Vedic Math into our 4 Pillars (Play,
              Learn, Think, Math) to help children develop a deeper
              understanding of numbers while making learning engaging and
              enjoyable.
            </p>
          </div>
          <div>
            <CommonButton btnText={"View More"} />
          </div>
        </div>
        <div className="child-growth-carousel text-center pt-5 z-10">
          <MathCarousel
            contents={childCarouselContents}
            CardComponent={ChildCard}
            visibleSlides={4}
          />
        </div>
      </section>
      {/* default  monkey  */}
      <div className=" z-0  text-end hanging-monkey-2 ">
        <img src={monkey22} alt="" />
      </div>
      <div className="text-start" style={{ marginTop: "-5rem" }}>
        <img src={arrowmath} alt="" />
      </div>
      {/* abilities section */}
      <section className="abilities d-flex flex-column px-3  align-items-center gap-5 ">
        <div className="text-center" style={{ maxWidth: "800px" }}>
          <h4 className="heading-h4 fw-bold mb-3">
            Know Your Child’s Brain Abilities!
          </h4>
          <p className="fs-6 fw-medium">
            Become a well-informed parent. Learn about your child’s 5 brain
            abilities, strengths and weaknesses to manage their learning and
            growing up progress.
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
          {abilitiesArray.map((ability, index) => {
            return (
              <AbilitiesBox
                key={index}
                circleImg={ability.img}
                abilityHeading={ability.aHeading}
                abilityText={ability.aText}
              />
            );
          })}
        </div>
      </section>
      {/* default bg stickers */}
      <section className="d-flex justify-content-between m-3 mx-sm-5  ">
        <div className="ms-sm-5 ">
          <img src={va1} alt="" />
        </div>
        <div>
          <img src={va2} alt="" />
        </div>
      </section>
      {/* our testinomials section */}
      <section className="ourtestinomials d-flex gap-5 flex-column   text-center">
        <div
          className="position-relative"
          style={{ background: `url(${pencil}) 5%  no-repeat` }}
        >
          <h4
            className=" fw-normal mb-0"
            style={{
              color: "#33A1FF",
              fontFamily: "Yusei Magic",
              fontSize: "24px",
            }}
          >
            Testimonials
            <span>
              <img src={bee2} alt="" />
            </span>
          </h4>
          <strong className="heading-h4">Their Stories, Our Inspiration</strong>
        </div>

        <div
          className="d-flex justify-content-center w-100"
          style={{
            backgroundImage: `url(${testbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="w-100 " style={{ maxWidth: "1250px" }}>
            <MathCarousel
              contents={testonomialContents}
              CardComponent={TestonomialCard}
              visibleSlides={3}
            />
          </div>
        </div>
      </section>
      <hr
        className="mt-5 opacity-100"
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#E2E2E2",
          border: "none",
        }}
      />

      {/* section lets connect  -- contact --   */}

      <section className="contact-section px-3 px-sm-5 mb-5">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginTop: "-2.4rem" }}
        >
          <h4 className="heading-h4 fw-bold ">Get in touch</h4>
          <div>
            <img src={monkeyb3} alt="" width={"100%"} />
          </div>
        </div>
        <div className="d-flex flex-column w-100  flex-lg-row align-content-center justify-content-between gap-lg-5">
          <div >
            <div>
              <h4 className="fw-semibold " style={{ fontSize: "2.5em" }}>
                Ready to Empower Your Child’s Learning?
              </h4>
              <p
                className="position-relative fw-normal"
                style={{
                  zIndex: "1",
                  fontSize: "22px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Have questions about our programs or want to enroll your child?
                We’d love to hear from you! Reach out to us anytime — our team
                is here to help you make the best learning choice.
              </p>
              <div
                style={{
                  margin: "-5rem 0 0 -1rem",
                  zIndex: "0",
                  position: "relative",
                }}
              >
                <img src={vect55} alt="" />
              </div>
            </div>
            <div className="mt-2">
              <span className="style-connect ">Let’s Connect</span>
            </div>
          </div>

          <form
            className="d-flex flex-column w-100 gap-4 mt-4 mt-sm-0"
            // style={{ maxWidth: "700px" }}
            onSubmit={handleFormSubmit}
          >
            <h5 className="fw-medium " style={{ fontSize: "18px" }}>
              Enter Details:
            </h5>
            <div>
              <input
                className="input-box-style"
                type="text"
                name="name"
                required
                placeholder="Name"
                value={inputData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="input-box-style"
                type="email"
                name="email"
                required
                placeholder="Email"
                value={inputData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="input-box-style"
                type="tel"
                name="phone"
                required
                placeholder="Phone / Mob no."
                value={inputData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <textarea
                className="input-box-style"
                type="text"
                name="message"
                required
                placeholder="Message"
                rows={"3"}
                value={inputData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mt-2">
              <CommonButton btnText={"Submit"} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
