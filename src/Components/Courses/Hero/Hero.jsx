import React, { useEffect, useState } from "react";
import "../global.css";
import EnquiryForm from "../../UI/EnquiryForm"; // Import the EnquiryForm

import { useNavigate, useLocation } from "react-router-dom";

const Hero = ({ courseTitle, courseDescription }) => {
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false); // State to manage EnquiryForm visibility

  const navigate = useNavigate();

  // Static content for course highlights
  const staticCourseHighlights = [
    { title: "Course Duration", value: "4 Months" },
    { title: "Mode of Training", value: "Online / Classroom" },
    { title: "100% Placement Assistance", value: "Guaranteed" },
    { title: "Expert Faculties", value: "10+ Years Experienced" },
  ];

  return (
    <div
      className="container-fluid py-3"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="container">
        <div className="align-items-center">
          <div className="d-flex">
            <div className="col-md-8 text-start">
              <h1 className="fw-bold" style={{ color: "#ed2d16" }}>
                {courseTitle}{" "}
                <span className="text-white">Training and Certification</span>
              </h1>
              <br />
              <p style={{ fontSize: "14px", textAlign: "justify" }}>
                {courseDescription}
              </p>
              <div className="d-flex justify-content-between">
                <div className="course-ratings-stars">
                  <i className="text-warning fa fa-star" aria-hidden="true"></i>
                  <i className="text-warning fa fa-star" aria-hidden="true"></i>
                  <i className="text-warning fa fa-star" aria-hidden="true"></i>
                  <i className="text-warning fa fa-star" aria-hidden="true"></i>
                  <i className="text-warning fa fa-star" aria-hidden="true"></i>
                  <span> 5 out of 5</span>
                </div>
              </div>
              <hr />

              <div className="d-none d-md-block">
                <div className="row">
                  {staticCourseHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="col-3 text-center pt-2 m-2"
                      style={{
                        borderRight: "1px solid gray",
                        fontSize: "14px",
                        backgroundColor: "#ffc1c1",
                        borderRadius: "8px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      <p>{highlight.title}</p>
                      <p>{highlight.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-between row my-2">
                <button
                  onClick={() => navigate("/placementsstatistics")}
                  className="btn btn-outline-light rounded-1 px-3 col my-2 shadow"
                >
                  PLACEMENT RECORDS
                </button>

                <a
                  href="#"
                  onClick={() => setEnquiryFormVisible(true)}
                  download="Brochure.pdf"
                  className="btn btn-light rounded-1 fw-bold col mx-2 my-2 shadow"
                  style={{ color: "#ed2d16" }}
                >
                  DOWNLOAD BROCHURE
                </a>

                {isEnquiryFormVisible && (
                  <EnquiryForm
                    isVisible={isEnquiryFormVisible}
                    onClose={() => setEnquiryFormVisible(false)} // Hide the form on close
                  />
                )}
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center d-none d-md-flex">
              <div className="course-banner-sections-right">
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=919975127827&text=Hello%2C%20I%20want%20to%20know%20about%20Speedup%20Infotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-5 mt-3"
                    style={{
                      background: "#fff",
                      color: "#ed2d16",
                      border: "1px solid #fff",
                      fontWeight: 700,
                      fontSize: "18px",
                      transition: ".3s",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                  >
                    FREE COUNSELING
                  </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=919975127827&text=Hello%2C%20I%20want%20to%20know%20about%20Speedup%20Infotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-5 mt-3"
                    style={{
                      background: "#ed2d16",
                      color: "#fff",
                      border: "1px solid #ed2d16",
                      fontWeight: 700,
                      fontSize: "18px",
                      transition: ".3s",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                  >
                    Book a Free Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const location = useLocation();

  // Define course details based on the route
  const courseDetails = {
    "/mernstack": {
      title: "MERN Stack",
      description:
        "Dive into full-stack development using MongoDB, Express, React, and Node.js for modern web.",
    },
    "/pythonfullstack": {
      title: "Python Full Stack Development",
      description:
        "Master Python, Django, and front-end development to become a full-stack developer.",
      age: "23",
    },
    "/datascience": {
      title: "Data Science",
      description:
        "Explore the world of data analysis, machine learning, and artificial intelligence with hands-on projects and real-world applications.",
    },
    "/dataanalyst": {
      title: "Data Analyst",
      description:
        "Learn to extract insights from data using tools like Excel, SQL, Tableau, and Python, and build your career as a data analyst.",
    },
  };

  // Fallback content for unknown routes
  const defaultCourse = {
    title: "404 - Course Not Found",
    description: "The course you are looking for does not exist.",
  };

  const { title, description } =
    courseDetails[location.pathname] || defaultCourse;

  return <Hero courseTitle={title} courseDescription={description} />;
};

export default HeroSection;
