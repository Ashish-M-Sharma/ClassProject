import React from "react";
import card1 from "../../../assets/card1.jpeg";
import card2 from "../../../assets/card2.jpeg";
import card3 from "../../../assets/card4.jpeg";
import card4 from "../../../assets/card5.jpeg";

const ProgramCredentials = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h3 className="text-center mb-4 fw-bold">Program Core Credentials</h3>
        <div className="row d-flex justify-content-center">
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-2 rounded-3 text-center pt-3 m-3 shadow"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={card4} alt="Expert Trainer" className="img-fluid mb-3" />
            <p className="mb-1">Trainer Profiles</p>
            <b>Industry Experts</b>
          </div>

          <div
            className="col-12 col-sm-6 col-md-4 col-lg-2 rounded-3 text-center pt-3 m-3 shadow"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={card4} alt="Trained Students" className="img-fluid mb-3" />
            <p className="mb-1">Trained Students</p>
            <b>4000+ Students Enrolled</b>
          </div>

          <div
            className="col-12 col-sm-6 col-md-4 col-lg-2 rounded-3 text-center pt-3 m-3 shadow"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={card3} alt="Success Ratio" className="img-fluid mb-3" />
            <p className="mb-1">Success Ratio</p>
            <b>100%</b>
          </div>

          <div
            className="col-12 col-sm-6 col-md-4 col-lg-2 rounded-3 text-center pt-3 m-3 shadow"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={card4} alt="Corporate Training" className="img-fluid mb-3" />
            <p className="mb-1">Corporate Training</p>
            <b>For India & Abroad</b>
          </div>

          <div
            className="col-12 col-sm-6 col-md-4 col-lg-2 rounded-3 text-center pt-3 m-3 shadow"
            style={{ backgroundColor: "#fff" }}
          >
            <img src={card4} alt="Job Assistance" className="img-fluid mb-3" />
            <p className="mb-1">Job Assistance</p>
            <b>100%</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCredentials;
