
import cardbg from "../../assets/home-section/vedic-math-section/carouselCardBg.png";

export const ChildCard = ({ img, description }) => {
  return (
    <div
      className="d-flex gap-4 flex-column align-items-center justify-content-center"
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
        <img src={img} alt="child icon" />
      </div>
      <div className="w-75 text-center">
        <p style={{ fontSize: "20px", fontWeight: "400" }}>{description}</p>
      </div>
    </div>
  );
};
