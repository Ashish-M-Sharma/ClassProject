import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Feedback = () => {
  return (
    <div className="container-fluid bg-light py-5" id="reviews">
      <div className="container">
        <h3 className="text-center mb-4  fw-bold">
          <b className="text-dark">Student Feedback</b>
        </h3>

        <div id="feedback" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Feedback 1 */}
            <div className="carousel-item p-3 active">
              <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Rahul Sharma"
                    className="rounded-circle shadow"
                  />
                </div>
                <div
                  className="col-md-9 fs-6"
                  style={{
                    textAlign: "justify",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>
                    "Speedup Infotech provided me with a comprehensive and
                    practical understanding of the MERN stack. The hands-on
                    projects and real-world scenarios boosted my confidence as a
                    developer. The mentors were always approachable and
                    supportive throughout the training."
                  </p>
                  <h5 className="pt-3 text-primary">
                    <b>Rahul Sharma</b>
                  </h5>
                </div>
              </div>
            </div>

            {/* Feedback 2 */}
            <div className="carousel-item p-3">
              <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Priya Desai"
                    className="rounded-circle shadow"
                  />
                </div>
                <div
                  className="col-md-9 fs-6"
                  style={{
                    textAlign: "justify",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>
                    "The Java Full Stack course was a game-changer for me. From
                    learning the basics of JavaScript to deploying real-time
                    projects, every aspect of the training was top-notch. The
                    placement assistance provided by Speedup Infotech helped me
                    secure my first job in the IT industry!"
                  </p>
                  <h5 className="pt-3 text-primary">
                    <b>Priya Desai</b>
                  </h5>
                </div>
              </div>
            </div>

            {/* Feedback 3 */}
            <div className="carousel-item p-3">
              <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Aditi Kumar"
                    className="rounded-circle shadow"
                  />
                </div>
                <div
                  className="col-md-9 fs-6"
                  style={{
                    textAlign: "justify",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>
                    "I enrolled in the ReactJS training at Speedup Infotech, and
                    it was an incredible experience. The curriculum was
                    well-structured, and the trainers ensured that every concept
                    was crystal clear. The internship opportunities provided
                    were a great addition to the course."
                  </p>
                  <h5 className="pt-3 text-primary">
                    <b>Aditi Kumar</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#feedback"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#feedback"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
