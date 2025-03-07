import React from "react";
import careerbg from "../almabetter resoures/careerbg.jpg";
import Placement from "../almabetter resoures/chat@2x.png";
import Resume from "../almabetter resoures/cv@2x.png";
import Mock from "../almabetter resoures/interview@2x.png";
import Mentor from "../almabetter resoures/handshake@2x.png";
import Assurance from "../almabetter resoures/quality-assurance (1)@2x.png";
import "../Css/CourseBanner.css";
// import CmpnyCarousel from "./CmpnyCarousel";
import CmpnyCarousel2 from "./CmpnyCarousel2";

const CourseBanner = () => {
  return (
    <div className="container-box">
      <div
        className="course-container"
        style={{
          // backgroundImage: `url(${careerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="overlay"></div>
        <div className="parent">
          <h1 className="child">FEATURED COURSES</h1>
          <p className="child2">
            <h2>MERN STACK</h2>
            <h2>DATA SCIENCE</h2>
          </p>
          <p className="child2">
            <h2>PYTHON FULLSTACK</h2>
            <h2>DATA ANALYTICS</h2>
          </p>
          <h2 className="child">ENROLL FOR COURSE</h2>
        </div>
      </div>

      {/**/}
      <div
        className="course-container2"
        style={{
          backgroundImage: `url(${careerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="overlay2"></div>
        <h2 className="text-center" style={{ textShadow: "white 0 0 10px" }}>
          WHY CHOOSE SPEEDUP INFOTECH ?
        </h2>
        <h4 className="text-center" style={{ width: "60%", margin: "auto" }}>
          SpeedUp Infotech provides a comprehensive range of services to prepare
          you for job success.
        </h4>
        <div className="box">
          <div className="box-child">
            <div className="img">
              <img src={Placement} alt="Placement Support" />
            </div>
            <h4>Placement Support</h4>
          </div>
          <div className="box-child">
            <div className="img">
              <img src={Resume} alt="Resume Building" />
            </div>
            <h4>Resume Building</h4>
          </div>
          <div className="box-child">
            <div className="img">
              <img src={Mock} alt="Mock Interviews" />
            </div>
            <h4>Mock Interviews</h4>
          </div>
        </div>
        <div className="box">
          <div className="box-child">
            <div className="img">
              <img src={Mentor} alt="Mentor Support" />
            </div>
            <h4>Mentor Support</h4>
          </div>
          <div className="box-child">
            <div className="img">
              <img src={Assurance} alt="Placement Assurance" />
            </div>
            <h4>Placement Assurance</h4>
          </div>
        </div>
      </div>
      <CmpnyCarousel2 />
    </div>
  );
};

export default CourseBanner;
