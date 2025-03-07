import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/Css/Career.css";
import CareerImg from "../../src/almabetter resoures/ManWithThreeRoads.png";
import Logo from "../../src/almabetter resoures/SpeedupLogo.png";

const Career = () => {
  const careerData = [
    [
      "Business Intelligence Analyst",
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Engineer",
      "AI Engineer",
      "Data Architect",
      "Big Data Engineer",
    ],
    [
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Cloud Engineer",
      "Cybersecurity Specialist",
    ],
    [
      "Product Manager",
      "UX/UI Designer",
      "Quality Assurance Engineer",
      "Mobile App Developer",
      "Embedded Systems Engineer",
      "Game Developer",
      "Database Administrator",
    ],
  ];

  return (
    <>
      {/* Main Career Section */}
      <div className="career-section">
        <div className="overlay"></div>
        <div className="container text-center text-white position-relative">
          <h2 className="fw-bold">Think You Could Fit In?</h2>
          <h3 className="fw-bold">
            Discover Your Next Career Move with SpeedUp Infotech
          </h3>

          <button className="current-openings-btn my-5 px-4 py-2">
            CURRENT OPENINGS
          </button>

          <div className="row justify-content-center">
            {[
              { title: "MERN STACK DEVELOPER" },
              { title: "PYTHON DEVELOPER" },
              { title: "DATA SCIENTIST" },
            ].map((job, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-12 mb-4 d-flex justify-content-center"
              >
                <div className="career-card text-center">
                  <div className="career-header">{job.title}</div>
                  <div className="career-body">
                    <p>IT Software</p>
                    <p>Pune</p>
                    <p>Minimum 0-1 Year</p>
                  </div>
                  <button className="btn btn-danger fw-bold apply-btn">
                    APPLY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="careers-btn my-5 px-4 py-2">
            CAREERS WE OFFER
          </button>
        </div>
      </div>

      {/* Bottom Image Part (Hidden in Mobile View) */}
      <div className="career-image-container hide-on-mobile">
        <img src={CareerImg} alt="Career Paths" className="career-image" />

        <div className="career-data-overlay">
          {careerData.map((category, index) => (
            <div key={index} className="career-column">
              {category.map((role, i) => (
                <p key={i}>{role}</p>
              ))}
              <button className="career-button">
                {index === 0
                  ? "DATA SCIENCE"
                  : index === 1
                  ? "MERN STACK"
                  : "DATA ANALYTICS"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Logo with Small Size */}
      <div className="logo-container hide-on-mobile">
        <img src={Logo} alt="SpeedUp Logo" className="logo" />
      </div>
    </>
  );
};

export default Career;
