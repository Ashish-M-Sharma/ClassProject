import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactTwo from "../../src/Components/ContactTwo";
import bgImage from "../../src/almabetter resoures/Bg.jpg";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div
        className="contact-bg py-5"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Black Transparent Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 0,
          }}
        ></div>

        <div
          className="container d-flex justify-content-center position-relative"
          style={{ width: "95%", zIndex: 1 }}
        >
          <div className="row align-items-center bg-white rounded-4 shadow p-0 position-relative z-1 w-100">
            {/* Left Side - Contact Details */}
            <div className="col-md-6 p-5 text-start">
              <h5 className="text-dark">Get In Touch</h5>
              <h2 className="fw-bold">
                BOOK <span className="text-danger">YOUR SESSION</span>
              </h2>
              <h2 className="fw-bold">
                ASK <span className="text-danger">YOUR DOUBTS</span> AWAY
              </h2>
              <p className="text-muted">
                Contact us for any questions, technical assistance, or
                opportunities via the contact information provided.
              </p>
              <div className="d-flex my-5">
                <div
                  className="d-flex flex-column py-4 gap-4 fs-5 bg-danger text-light rounded-end"
                  style={{
                    paddingLeft: "70px",
                    paddingRight: "20px",
                    marginLeft: "-50px",
                  }}
                >
                  <FaPhoneAlt />
                  <FaEnvelope />
                  <FaMapMarkerAlt />
                </div>
                <div
                  className="d-flex flex-column gap-2 text-dark px-3 rounded-3"
                  style={{ padding: "22px 0px" }}
                >
                  <p className="d-flex align-items-center mb-2">
                    +91 7219 777 599
                  </p>
                  <p className="d-flex align-items-center mb-2">
                    support@speedupinfotech.com
                  </p>
                  <p className="d-flex align-items-center mb-0">
                    3rd Floor, Avenir Building, JM Road, Shivaji Nagar, Pune,
                    Maharashtra-411004.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            {/* <div className="col-md-6 p-5 d-flex justify-content-center">
              <div className="p-4 bg-dark text-white rounded-4 shadow w-100 d-flex justify-content-center">
                <form className="w-100" onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-bold">Full Name</label>
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 text-white w-100"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-bold">E-Mail</label>
                    <input
                      type="email"
                      className="form-control bg-secondary border-0 text-white w-100"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-bold">Mobile</label>
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 text-white w-100"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-bold">Message</label>
                    <textarea
                      className="form-control bg-secondary border-0 text-white w-100 "
                      placeholder="Write your message"
                      rows="4"
                      required
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-danger w-100 fw-bold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div> */}

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
        </div>

        <ContactTwo />
      </div>
    </>
  );
};

export default ContactForm;
