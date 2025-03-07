import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/Courses.css";
import MERNLOGO from "../../src/almabetter resoures/MERN Logo.png";
import MERNBG from "../../src/almabetter resoures/MERN BG.png";
import ProgramCrediantials from "./ProgramCrediantials";
import LearnPracticeMore from "./LearnPracticeMore";
import TrainingFAQ from "./TrainingFAQ";
import StudentFeedback from "./StudentFeedback";
import Testimonials from "./Testimonials";

const CoursesMain = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your demo session is booked successfully! 🎉", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const styles = {
    infoSection: {
      backgroundColor: "#f8f9fa",
      borderRadius: "0.5rem",
      overflow: "hidden",
      marginTop: "3rem",
      marginBottom: "3rem",
      color: "#000",
    },
    infoTitle: {
      fontSize: "16px",
    },
    infoValue: {
      width: "100%",
      fontWeight: "bold",
      fontSize: "18px",
      textAlign: "center !important",
    },
  };

  return (
    <>
      <div
        className="container-fluid course-container"
        style={{
          backgroundImage: `url(${MERNBG})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div className="row">
          {/* Responsive Wrapper */}
          <div
            className="d-flex flex-column flex-md-row gap-5 px-3 px-md-5 align-items-center"
            style={{ minHeight: "600px" }}
          >
            {/* Left Section */}
            <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 w-md-50">
              <div
                className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start"
                style={{ padding: "10px 25px" }} // Adjusted for better spacing
              >
                <p className="text-light fw-bold fs-4 fs-md-2 mb-2">
                  MERN Stack Development
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap mb-3">
                  <button className="btn btn-danger text-light px-3 px-md-4 py-2">
                    JOIN NOW
                  </button>
                  <button className="border border-black btn btn-light text-danger px-2 px-md-4 py-2">
                    DOWNLOAD SYLLABUS
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className="d-flex justify-content-center w-100"
                style={{ marginTop: "-160px" }}
              >
                <img
                  src={MERNLOGO}
                  alt="Logo"
                  className="img-fluid"
                  style={{
                    width: "100%", // Auto scales for all screens
                    // maxWidth: "80%",
                  }}
                />
              </div>
            </div>

            {/* Right Section (Form) */}
            <div
              className="px-4 py-4 d-flex flex-column align-self-center mx-auto"
              style={{
                borderRadius: "10px",
                backgroundColor: "#CED4DA",
                width: "95%", // Full width for small screens
                maxWidth: "500px", // Restricts on larger screens
              }}
            >
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="text-center text-md-left">
                  <p className="text-black fw-bold fs-5 fs-md-4">
                    BOOK A LIVE DEMO SESSION
                  </p>
                  <p className="text-danger fw-bold fs-6 fs-md-5">
                    Register to attend free live session
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="mb-3 w-100 form-control"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="mb-3 w-100 form-control"
                />

                <select className="mb-3 w-100 form-select">
                  <option disabled selected>
                    Course Interest
                  </option>
                  <option>Web Development</option>
                  <option>Data Science</option>
                  <option>Cloud Computing</option>
                </select>

                <select className="mb-3 w-100 form-select">
                  <option disabled selected>
                    Graduation Year
                  </option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>

                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="mb-3 w-100 form-control"
                />

                <div className="form-check mb-2 w-100 d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="terms"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms"
                    style={{ fontSize: "12px" }}
                  >
                    By continuing, you confirm that you have read and agreed to
                    SpeedUp Infotech's Terms and Privacy Policy.
                  </label>
                </div>

                <button className="bg-danger text-light fw-bold btn w-100">
                  BOOK YOUR DEMO SESSION
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div style={styles.infoSection}>
            <div className="row text-center g-0">
              <div className="col-md-3 p-3 border-end ">
                <h3 style={styles.infoTitle}>Duration</h3>
                <p style={styles.infoValue} className="text-center">
                  6 Months
                </p>
              </div>
              <div className="col-md-3 p-3 border-end ">
                <h3 style={styles.infoTitle}>Eligibility</h3>
                <p style={styles.infoValue} className="text-center">
                  Graduations & Professionals
                </p>
              </div>
              <div className="col-md-3 p-3 border-end ">
                <h3 style={styles.infoTitle}>Learning Mode</h3>
                <p style={styles.infoValue} className="text-center">
                  Online/Offline
                </p>
              </div>
              <div className="col-md-3 p-3 ">
                <h3 style={styles.infoTitle}>Next Batch</h3>
                <p style={styles.infoValue} className="text-center">
                  17th Feb 2025
                </p>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <ProgramCrediantials />
          <LearnPracticeMore />
          <TrainingFAQ />
          <StudentFeedback />
          <Testimonials />

          {/* Toaster Notification */}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default CoursesMain;
