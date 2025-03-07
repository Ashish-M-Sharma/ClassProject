import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ProgramHighlights.css'




const ProgramHighlights = () => {
  return (
    <div className="container-fluid bg-light py-5" id="traingfetures">
      <div className="container">
        <h3 className="text-center py-3 fw-bold">PROGRAM HIGHLIGHTS</h3>
        <p className="text-center fs-5 text-muted">
          Know more about how the Training Course will benefit you!
        </p>

        <div className="row text-center mt-4">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body ">
                <div className="mb-3">
                <i className="fa-solid fa-chalkboard-teacher fa-3x text-primary"></i>
                </div>
                <h6 className="fw-bold">
                  Real-Time Industry <br /> Experts Trainers
                </h6>
                <p className="text-muted mt-2">
                  ATPL provides certified Full Stack Training trainers with 12+
                  years of experience in corporate training and real-time
                  projects.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3">
                  <i className="fas fa-laptop-code fa-3x text-success"></i>
                </div>
                <h6 className="fw-bold">
                  Excellent Full Stack Training <br /> Lab Facility
                </h6>
                <p className="text-muted mt-2">
                  High-tech labs with Wi-Fi and a healthy learning environment
                  for every student.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3">
                  <i className="fas fa-tasks fa-3x text-warning"></i>
                </div>
                <h6 className="fw-bold">
                  Practical Task & <br /> Assignment
                </h6>
                <p className="text-muted mt-2">
                  Real-time assignments, case studies, and projects for Full
                  Stack Training courses, along with study materials.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center mt-4">
          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3">
                  <i className="fas fa-server fa-3x text-danger"></i>
                </div>
                <h6 className="fw-bold">
                  Full Stack Training Live Server & <br /> 24 X 7 Support
                </h6>
                <p className="text-muted mt-2">
                  24/7 access for practice purposes, with online support via
                  call, chat, or email.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3">
                  <i className="fas fa-user-tie fa-3x text-info"></i>
                </div>
                <h6 className="fw-bold">
                  Mock Interview & <br /> Resume Preparation
                </h6>
                <p className="text-muted mt-2">
                  Weekly mock interviews, tips, and resume preparation for
                  high-paying job opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3">
                  <i className="fas fa-briefcase fa-3x text-secondary"></i>
                </div>
                <h6 className="fw-bold">100% Placement Assistance</h6>
                <p className="text-muted mt-2">
                  100% job assistance through 250+ placement and internship
                  partners in IT and non-IT industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
