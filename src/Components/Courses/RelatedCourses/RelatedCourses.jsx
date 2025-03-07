import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './RelatedCourses.css'; // Link to a custom CSS file for additional styling
import { NavLink } from "react-router-dom";

const RelatedCourses = () => {
  return (
    <div className="container-fluid py-5" id="related-courses">
      <div className="container">
        <h3 className="text-center py-3 text-dark fw-bold" style={{ fontSize: '2rem', fontWeight: '600' }}>Explore Our Related Courses</h3>
        <div className="row d-flex flex-wrap justify-content-center">
          {/* MERN Stack */}
          <div className="col-12 col-md-3 card rounded-3 shadow m-3 border-0 course-card">
            <NavLink to="/mernstack" className="text-decoration-none">
              <div className="card-body text-center p-4 d-flex flex-direction-column">
                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  MERN Stack Development
                </h6>
                <p className="card-text text-muted">Master MongoDB, Express, React, and Node.js for full-stack web development.</p>
              </div>
            </NavLink>
          </div>

          {/* Python Full Stack */}
          <div className="col-12 col-md-3 card rounded-3 shadow m-3 border-0 course-card">
            <NavLink to="/pythonfullstack" className="text-decoration-none">
              <div className="card-body text-center p-4">
                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Python Full Stack Development
                </h6>
                <p className="card-text text-muted">Learn both front-end and back-end development with Python and frameworks like Django.</p>
              </div>
            </NavLink>
          </div>

          {/* Data Science Training */}
          <div className="col-12 col-md-3 card rounded-3 shadow m-3 border-0 course-card">
            <NavLink to="/datascience" className="text-decoration-none">
              <div className="card-body text-center p-4">
                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Data Science Training
                </h6>
                <p className="card-text text-muted">Master the art of data analysis, machine learning, and visualization tools for impactful insights.</p>
              </div>
            </NavLink>
          </div>

          {/* Data Analyst Training */}
          <div className="col-12 col-md-3 card rounded-3 shadow m-3 border-0 course-card">
            <NavLink to="/dataanalyst" className="text-decoration-none">
              <div className="card-body text-center p-4">
                <h6 className="card-title" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Data Analyst Training
                </h6>
                <p className="card-text text-muted">Learn the key skills for analyzing and interpreting complex data to help businesses make data-driven decisions.</p>
              </div>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;
