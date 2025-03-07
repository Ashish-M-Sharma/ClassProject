import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/LandingPage.css"; // Import external CSS
import heroImage from "../almabetter resoures/331080-PAKMHW-263@2x.png"; // Ensure you have the correct path for the image

const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your demo session is booked successfully! 🎉", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="container-fluid landing-container py-5 px-5 px-xxl-5">
      {/* Increased padding (px-5 for smaller screens, px-xxl-5 for extra-large screens) */}
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 text-section">
          <h1>
            Unlock Your Potential with <br />
            <span className="highlight">SPEEDUP INFOTECH</span>
          </h1>
          <p className="description">
            Kickstart your journey with us! <br />
            Expert training in the latest technologies like{" "}
            <b>MERN Stack, Python Full Stack, Data Science,</b> and{" "}
            <b>Data Analyst Training.</b> <br />
            Let's build your future together! <br />
            <b>Unlock earning potential up to 10 LPA.</b>
          </p>
          <button className="btn explore-btn">EXPLORE COURSES</button>
          <div className="hero-image-container">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="hero-image"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div
          className="px-5 py-5 d-flex flex-column align-self-center mx-auto"
          style={{
            borderRadius: "10px",
            backgroundColor: "#CED4DA",
            width: "95%",
            maxWidth: "500px",
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
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="mb-3 w-100 form-control"
              required
            />

            <select className="mb-3 w-100 form-select" required>
              <option value="" disabled selected>
                Course Interest
              </option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Cloud Computing</option>
            </select>

            <select className="mb-3 w-100 form-select" required>
              <option value="" disabled selected>
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
              required
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
      {/* Toaster Container */}
      <ToastContainer />
    </div>
  );
};

export default LandingPage;
