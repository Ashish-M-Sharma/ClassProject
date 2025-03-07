import React from "react";
import "../Css/CmpnyCarousel.css";

const companyLogos = [
  ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
  ["8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png"],
  [
    "15.png",
    "16-plough.png",
    "17.png",
    "18-energy.png",
    "19.png",
    "20.png",
    "21.png",
  ],
];

const CmpnyCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        TOP COMPANIES HIRING FROM{" "}
        <span className="highlighted">SPEEDUP INFOTECH</span>
      </h2>

      <div className="carousel-wrapper">
        {companyLogos.map((logos, index) => (
          <div
            key={index}
            className={`carousel-row ${
              index % 2 === 0 ? "scroll-right" : "scroll-left"
            }`}
          >
            <div className="carousel-track">
              {logos.concat(logos).map((logo, idx) => (
                <div className="carousel-item" key={idx}>
                  <img src={`/logos/${logo}`} alt="Company Logo" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CmpnyCarousel;
