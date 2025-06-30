import { useEffect, useState } from "react";

import "../styles/topbar.css"

import fb from "../assets/topbar_social-icons/facebook1.png";
import insta from "../assets/topbar_social-icons/instagram1.png";
import youtube from "../assets/topbar_social-icons/youtube1.png";

export default function TopBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="d-flex justify-content-between px-3  px-sm-5"
      style={{
        backgroundColor: "#333333",
        color: "#FFFFFF",
        fontSize: isMobile ? "12px" : "18px",
        padding:"10px"
      }}
    >
      <div
        className="d-flex align-items-sm-center flex-column flex-sm-row gap-sm-4 text-sm fw-semibold"
        style={{ fontSize: isMobile?"12px" : "14px"  }}
      >
        <div className="e-mail text-hover">
          <span>
            <svg
              width={isMobile ? "15px" : "28"}
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <rect width="28" height="28" fill="url(#pattern0_387_375)" />
              <defs>
                <pattern
                  id="pattern0_387_375"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_387_375"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_387_375"
                  width="128"
                  height="128"
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </span>
          <span className="ms-2  fw-semibold">enquiry@mathmonkey.asia</span>
        </div>
        <div className="contact text-hover" style={{ display: "block" }}>
          <span>
            <svg
              width={isMobile ? "15px" : "28"}
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="22" height="22" fill="url(#pattern0_387_376)" />
              <defs>
                <pattern
                  id="pattern0_387_376"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_387_376"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_387_376"
                  width="128"
                  height="128"
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </span>
          <span className="ms-2 fw-semibold ">+1234567890</span>
        </div>
      </div>
      <div className="social-media d-flex flex-column flex-sm-row gap-2 gap-sm-3 ">
        <div>
          <span className="contents text-hover fw-semibold" style={{ fontSize: isMobile?"12px" : "14px" }}>
            Follow Us On :
          </span>
        </div>
        <div className="social-icon d-flex gap-2 ">
          <span className="social-icon-hover">
            <img
              src={fb}
              alt="fb"
              style={{ width: isMobile ? "18px" : "100%" }}
            />
          </span>
          <span  className="social-icon-hover">
            <img
              src={insta}
              alt="insta"
              style={{ width: isMobile ? "18px" : "100%" }}
            />
          </span>
          <span  className="social-icon-hover">
            <img
              src={youtube}
              alt="youtube"
              style={{ width: isMobile ? "18px" : "100%" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
