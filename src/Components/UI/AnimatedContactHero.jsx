import React from "react";
import speeduplogo from "../../almabetter resoures/logo.png";
import ct1 from "../../almabetter resoures/Ct1.png";
import ct2 from "../../almabetter resoures/Ct2.png";
import ct3 from "../../almabetter resoures/Ct3.png";
import ct4 from "../../almabetter resoures/Ct4.png";
import ct5 from "../../almabetter resoures/Ct5.png";
import "../../Css/AnimatedContactHero.css";

const AnimatedContactHero = () => {
  return (
    <div className="area" style={{height:'50vh'}}>
      <ul className="circles">
        <li>
          <img
            style={{ width: "140px", height: "auto" }}
            src={ct1}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "170px", height: "auto" }}
            src={ct2}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "130px", height: "auto" }}
            src={ct3}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "150px", height: "auto" }}
            src={ct4}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "110px", height: "auto" }}
            src={ct5}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "160px", height: "auto" }}
            src={ct1}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "130px", height: "auto" }}
            src={ct2}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "250px", height: "auto" }}
            src={ct3}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "180px", height: "auto" }}
            src={ct4}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "250px", height: "auto" }}
            src={ct5}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "180px", height: "auto" }}
            src={ct1}
            alt="html"
          />
        </li>
        <li>
          <img
            style={{ width: "120px", height: "auto" }}
            src={ct2}
            alt="html"
          />
        </li>
      </ul>

      <h1 className="centered-heading">
        Speedup is here to serve you, the one-stop solution for your IT Career.
      </h1>
    </div>
  );
};

export default AnimatedContactHero;
