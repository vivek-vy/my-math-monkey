export const AbilitiesBox = ({ circleImg, abilityHeading, abilityText }) => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center  gap-4"
        style={{
          borderRadius: "20px",
          background: "#FFF4ED",
          padding: "1.2rem 1rem",
          maxWidth:"450px"
        }}
      >
        <span
          className="p-3  rounded-circle text-white fw-bold fs-5"
          style={{ backgroundColor: "#FF6900" }}
        >
          <img src={circleImg} alt="" />
        </span>

        <div style={{fontFamily:" Rubik"}} >
          <h4 className="fs-4 fw-semibold" >{abilityHeading}</h4>
          <strong className="fs-6 fw-normal">{abilityText}</strong>
        </div>
      </div>
    </>
  );
};
