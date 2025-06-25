import React from "react";
import "../../styles/HomeStyle.css"

export const OurPillars = ({ img, heading, description }) => {
  return (
    <>
      <div
        className="pillar-box d-flex gap-4 flex-column align-items-center text-center"
        style={{ width: "300px" }}
      >
        <div>
          <img src={img} alt="play-1" />
        </div>
        <div>
          <h4 style={{ color: "#FF6900", fontSize: "30px" }}>{heading}</h4>
          <p className="fw-medium fs-6">{description}</p>
        </div>
      </div>
    </>
  );
};
