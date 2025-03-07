import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CmpnyCarousel from "./CmpnyCarousel";
import RolesSection from "./RoleSection";
import HowItWorks from "../../src/almabetter resoures/how it works.png";

const HireFromUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    toast.success("Form submitted successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url('/your-image-path.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100vw",
      }}
    >
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh", // Allow the section to expand based on content
          backgroundImage: "url('/your-background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "40px 20px",
        }}
      >
        <div className="container pb-5">
          {" "}
          {/* Added padding-bottom to avoid overlap */}
          <div className="row g-4">
            {/* Left Section */}
            <div className="col-lg-6 text-white text-center text-lg-start">
              <h1 className="fw-bold">
                Start Hiring The Best Tech Talent From Us.
              </h1>
              <p className="fs-5">
                Build your Data & Engineering Team with industry-ready 4000+ top
                skilled tech talented students.
              </p>

              {/* Info Boxes */}
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="text-dark p-3 text-center rounded shadow"
                      style={{
                        backgroundColor: "#CED4DA",
                        borderRadius: "12px",
                        padding: "20px",
                        maxWidth: "600px",
                        margin: "auto",
                        border: "1px solid #ddd",
                      }}
                    >
                      <div className="row row-cols-2 g-0">
                        <div
                          className="col"
                          style={{
                            padding: "20px",
                            borderRight: "1px solid black",
                            borderBottom: "1px solid black",
                          }}
                        >
                          <h6 className="fw-bold">HIRING FEE FOR RECRUITERS</h6>
                          <h3 className="fw-bold">ZERO</h3>
                        </div>
                        <div
                          className="col"
                          style={{
                            padding: "20px",
                            borderBottom: "1px solid black",
                          }}
                        >
                          <h6 className="fw-bold">QUICK TURN AROUND TIME</h6>
                          <h3 className="fw-bold">&lt;1 WEEK</h3>
                        </div>
                        <div
                          className="col"
                          style={{
                            padding: "20px",
                            borderRight: "1px solid black",
                          }}
                        >
                          <h6 className="fw-bold">TRAINED BY THE</h6>
                          <h3 className="fw-bold">BEST TRAINERS</h3>
                        </div>
                        <div className="col" style={{ padding: "20px" }}>
                          <h6 className="fw-bold">STUDENTS PLACED</h6>
                          <h3 className="fw-bold">4000+</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="col-lg-6">
              <div
                className="p-4 rounded shadow"
                style={{ backgroundColor: "#CED4DA" }}
              >
                <h4 className="fw-bold text-center mb-4">
                  SCHEDULE A DEMO CALL WITH OUR PLACEMENT TEAM
                </h4>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-3 input-highlight"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-3 input-highlight"
                    placeholder="Work Email"
                    required
                  />
                  <input
                    type="tel"
                    className="form-control mb-3 input-highlight"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-3 input-highlight"
                    placeholder="Company Name"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-3 input-highlight"
                    placeholder="Designation"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-danger w-100 fw-bold py-2"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Company Carousel */}
      <CmpnyCarousel />
      {/*Company Carousel */}

      {/* Role Section */}
      <RolesSection />
      {/* Role Section */}

      <div className="container">
        <div className="row">
          <div
            className="bg-light overflow-hidden"
            style={{ borderRadius: "50px 50px 0px 50px" }}
          >
            <img
              src={HowItWorks}
              alt="Image"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>
      {/* Toaster Component */}
      <ToastContainer />
    </div>
  );
};

export default HireFromUs;
