import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import learnprac from "../../../assets/background4-2.jpeg";

const LearnAndPractice = () => {
  return (
    <div
      className="container-fluid py-2"
      id="selfassessment"
      style={{ backgroundColor: "black" }}
    >
      <div className="container">
        <div className="row text-white">
          <div className="col-md-8 text-white py-5">
            <h2 className="text-white">Learn and Practice Online</h2>
            <p className="fs-6 text-white">
              24 X 7 Remote system access. Learn, enhance and test your skills
              and knowledge through online assessment tests to achieve your
              career goals.
            </p>
            <button
              className="btn btn-outline-light rounded-1"
              data-bs-toggle="modal"
              data-bs-target="#popup"
            >
              Take Free Assessment Exam
            </button>
          </div>
          <div className="col-md-4">
            <img
              src={learnprac}
              className="d-none d-md-block"
              alt="sap Courses in pune"
              height="250"
              width="390"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndPractice;
