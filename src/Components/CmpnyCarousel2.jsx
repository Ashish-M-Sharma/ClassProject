import React from "react";
import "../Css/CmpnyCarousel2.css";

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

const CmpnyCarousel2 = () => {
  return (
    <div className="carousel-container">
      <div className="our-hiring-partners-box">
        {" "}
        {/* Added box */}
        <h2 className="our-hiring-partners-title">OUR HIRING PARTNERS</h2>
      </div>

      <div className="carousel-wrapper ">
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

export default CmpnyCarousel2;
