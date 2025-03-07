import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reviewIcon from "../../../assets/googleIcon.png";

const Testimonials = () => {
  return (
    <div className="container-fluid bg-light py-5" id="reviews">
      <h3 className="text-center text-dark fw-bold mb-4">
        What People Are Saying About Us
      </h3>
      <div id="carouselExampleIndicatorsReviews_1" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsReviews_1"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsReviews_1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsReviews_1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner text-black">
          <div className="carousel-item active">
            <div className="row p-4 justify-content-center">
              <ReviewCard
                name="Vijaya"
                text="I learned SAP MM here. It was a great learning experience. The course syllabus and teaching style is great. They also provide the best job assistance program. I highly recommend Speedup Infotech for SAP!!"
              />
              <ReviewCard
                name="Tejas Bhosale"
                text="This is the best institute to learn Any SAP Module. I completed SAP ABAP training from this institute. The experience was so good, and Sir taught everything from basics. I will suggest this institute to anyone interested in learning SAP modules."
              />
              <ReviewCard
                name="SUSHIL ANDURE"
                text="I completed SAP ABAP training here. Speedup Infotech helped me a lot in my career. I liked the training quality, study materials, and placement assistance."
              />
            </div>
          </div>

          {/* Add additional carousel items as needed */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicatorsReviews_1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicatorsReviews_1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

const ReviewCard = ({ name, text }) => {
  return (
    <div
      className="col-md-3 card mx-2 my-3 shadow-lg border-0"
      style={{
        maxWidth: "300px",
        minHeight: "250px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <div className="item">
        <div className="d-flex align-items-center mb-3">
          <img
            src={reviewIcon}
            width="40"
            alt="Reviewer Avatar"
            className="rounded-circle me-2"
          />
          <div>
            <h5 className="mb-0 text-primary">{name}</h5>
            <div className="text-warning">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
          </div>
        </div>
        <p
          className="text-muted"
          style={{
            textAlign: "justify",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
