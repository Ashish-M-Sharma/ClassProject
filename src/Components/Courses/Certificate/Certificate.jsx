import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Certificate = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "" }}
      id="certification-section"
    >
      <div className="container">

        <div className="row align-items-center text-justify">

          <div className="col-md-12 mb-5">
            <h3 className="text-center py-3 fw-bold">EXAMS AND CERTFICATION</h3>
            <p className="text-center fs-5 text-muted">
              Know more about how the exams and certification will benefit you!
            </p>
          </div>

          {/* Left Column */}
          <div className="col-12 col-md-8">
            <div className="accordion accordion-flush" id="certification">
              <div className="accordion-item border mb-3 shadow-sm">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Certify Your Skills
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#certification"
                >
                  <div className="accordion-body">
                    When you complete the Full Stack Dot Net course and the
                    hands-on project, you will receive an ISO certificate that
                    you can share with potential employers and your
                    professional network.
                  </div>
                </div>
              </div>

              <div className="accordion-item border mb-3 shadow-sm">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Stand Out From The Crowd
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#certification"
                >
                  <div className="accordion-body">
                    Talk about it on LinkedIn, Twitter, and Facebook, boost
                    your resume, or frame it. Tell your friends and colleagues
                    about it.
                  </div>
                </div>
              </div>

              <div className="accordion-item border shadow-sm">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Upscale Your Career
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#certification"
                >
                  <div className="accordion-body">
                    Share your certification with potential employers to
                    demonstrate your skills and capabilities.
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-start gap-3 py-4">
              <a
                data-bs-toggle="modal"
                data-bs-target="#popup_1"
                className="btn btn-danger text-white shadow-sm"
              >
                Enroll Now
              </a>
              <a
                href="training-certificate.html"
                className="btn btn-outline-danger shadow-sm"
              >
                Get Certification
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-4 text-center">
            <img
              src="https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg"
              alt="certificate"
              className="shadow img-fluid d-none d-md-block rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src="img/certificate.webp"
              alt="certificate"
              className="shadow d-block d-md-none img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
