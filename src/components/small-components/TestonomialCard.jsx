

export const TestonomialCard = ({img,review,author}) => {
    
  return (
    <div
            className="d-flex flex-column  text-start justify-content-center "
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              maxWidth: "353px",
              height: "313px",
              color: "#FFFFFF",
              padding: "2rem 3rem",
            margin :"0 auto "
    
            }}
          >
            <p
              style={{
                fontSize: "14px ",
                fontFamily: "Yusei Magic",
                fontWeight: "400",
              }}
            >
              {review}
            </p>
            <p style={{ fontSize: "14px", fontWeight: "700" }}>
              {author}
            </p>
          </div>
  )
}
