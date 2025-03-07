import React, { useState } from "react";
import "../Css/LearnPracticeMore.css";
import { ToastContainer, Toast } from "react-bootstrap";

const LearnPracticeMore = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formData, setFormData] = useState({
    certify: "",
    standOut: "",
    upskill: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastMessage("Your inquiry has been submitted successfully!");
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);

    setFormData({ certify: "", standOut: "", upskill: "" });
  };

  const learnData = {
    title: "Learn and Practice Online",
    description:
      "Gain knowledge from the best trainers with live projects and 24/7 support.",
    image:
      process.env.PUBLIC_URL + "/almabetter_resources/online-education@2x.png",
    cards: [
      {
        image:
          process.env.PUBLIC_URL + "/almabetter_resources/badge (1)@2x.png",
        title: "Real-Time Industry Expert Trainers",
      },
      {
        image: process.env.PUBLIC_URL + "/almabetter_resources/mentor@2x.png",
        title: "Excellent Training Lab Facility",
      },
      {
        image:
          process.env.PUBLIC_URL + "/almabetter_resources/practice (1)@2x.png",
        title: "Hands-on Projects",
      },
      {
        image: process.env.PUBLIC_URL + "/almabetter_resources/server@2x.png",
        title: "Fullstack Training Live Server & 24X7 Support",
      },
      {
        image:
          process.env.PUBLIC_URL + "/almabetter_resources/job-interview@2x.png",
        title: "Mock Interview and Resume Preparation",
      },
      {
        image:
          process.env.PUBLIC_URL + "/almabetter_resources/businessman@2x.png",
        title: "100% Placement Assistance",
      },
    ],
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center position-relative">
        <p
          className="text-danger fs-4 fw-bold px-5 py-2 rounded-3 position-relative"
          style={{
            backgroundColor: "white",
            zIndex: "2",
            marginTop: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          Program Highlights
        </p>
        <div>
          <div
            className="position-relative"
            style={{
              width: "100vw",
              marginLeft: "-50vw",
              marginTop: "-40px",
              left: "50%",
              backgroundColor: "red",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
              padding: "60px 0",
              position: "relative",
              zIndex: "1",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                {learnData.cards.map((card, index) => (
                  <div
                    key={index}
                    className="col-md-4 d-flex justify-content-center mb-3"
                  >
                    <div className="d-flex align-items-center p-3 w-100 gap-3 position-relative">
                      <div
                        className="bg-white rounded-3 shadow-lg px-3 d-flex justify-content-center align-items-center"
                        style={{ width: "120px", height: "120px" }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="img-fluid"
                          style={{ maxWidth: "85%", maxHeight: "85%" }}
                        />
                      </div>
                      <div
                        className="bg-white fs-5 rounded-3 shadow-lg px-4 py-2 flex-grow-1 text-center position-absolute"
                        style={{ marginLeft: "120px", zIndex: "2" }}
                      >
                        <p className="fw-bold mb-0">{card.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bottom section - Converted to Form */}
      <div className="container-fluid py-5" style={{ color: "white" }}>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <p
            className="text-danger fs-4 fw-bold px-5 py-2 rounded-3 position-relative text-center"
            style={{
              backgroundColor: "white",
              zIndex: "2",
              marginTop: "-75px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
              maxWidth: "90%",
            }}
          >
            Exams and Certifications
          </p>
          <h3
            className="text-center fw-bold py-5 px-3"
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.8rem)", // Adjusts size dynamically
              maxWidth: "90%",
              wordBreak: "break-word",
              lineHeight: "1.4", // Improves readability
            }}
          >
            Know more about how the exams and certification will benefit you!
          </h3>

          <div
            className="row align-items-center mx-0"
            style={{ marginTop: "-50px" }}
          >
            {/* Left Side - Form */}
            <div className="col-lg-6 col-md-12 px-4">
              <form onSubmit={handleSubmit} className="w-100">
                {/* Certify Your Skills */}
                <select
                  className="form-select mb-3 w-100"
                  name="certify"
                  value={formData.certify}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Certify Your Skills</option>
                  <option value="Industry Recognized Certification">
                    Industry Recognized Certification
                  </option>
                  <option value="Technical Skill Validation">
                    Technical Skill Validation
                  </option>
                  <option value="Professional Growth">
                    Professional Growth
                  </option>
                </select>

                {/* Stand Out From The Crowd */}
                <select
                  className="form-select mb-3 w-100"
                  name="standOut"
                  value={formData.standOut}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Stand Out From The Crowd</option>
                  <option value="Better Job Opportunities">
                    Better Job Opportunities
                  </option>
                  <option value="Higher Credibility">Higher Credibility</option>
                  <option value="Skill Showcase">Skill Showcase</option>
                </select>

                {/* Upskill Your Career */}
                <select
                  className="form-select mb-3 w-100"
                  name="upskill"
                  value={formData.upskill}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Upskill Your Career</option>
                  <option value="Expand Knowledge">Expand Knowledge</option>
                  <option value="Stay Competitive">Stay Competitive</option>
                  <option value="Career Growth">Career Growth</option>
                </select>

                <div className="d-flex gap-3 mt-4 flex-wrap justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-light fw-bold px-4 py-2"
                  >
                    ENROLL NOW
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger fw-bold px-4 py-2"
                  >
                    GET CERTIFICATION
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Certificate Image */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-4 mt-lg-0">
              <img
                src={`${process.env.PUBLIC_URL}/almabetter_resources/Certificate.png`}
                alt="Certificate"
                className="img-fluid"
                style={{ maxWidth: "90%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Toast Notification - Properly positioned and working */}
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1050,
            minWidth: "300px",
          }}
        >
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            style={{
              backgroundColor: "#343a40",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            <Toast.Header
              style={{ backgroundColor: "#212529", color: "white" }}
            >
              <strong className="me-auto">Success</strong>
            </Toast.Header>
            <Toast.Body style={{ fontSize: "16px", fontWeight: "500" }}>
              ✅ {toastMessage}
            </Toast.Body>
          </Toast>
        </div>
      </div>

      {/* Middle Bottom section - Converted to Form */}

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default LearnPracticeMore;
