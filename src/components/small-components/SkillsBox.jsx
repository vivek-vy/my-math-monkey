import React from "react";

export const Skills = ({circleBg,number,skillsText}) => {
  return (
    <>
      {" "}
      <div
        className="d-flex p-2 px-4 align-items-center gap-3"
        style={{
          boxShadow: "0px 0px 6.644px 0px rgba(0, 0, 0, 0.10)",
          borderRadius: "11.074px",
          background: "#FFF",
        }}
      >
        <span
          className="p-1 px-3 rounded-circle text-white fw-bold fs-5"
          style={{ backgroundColor: circleBg }}
        >
          {number}
        </span>

        <strong className="fs-5">{skillsText}</strong>
      </div>
    </>
  );
};
