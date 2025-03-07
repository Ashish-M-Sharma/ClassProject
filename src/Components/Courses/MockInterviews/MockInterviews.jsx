import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const MockInterviews = () => {
  const nav = useNavigate();

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container my-2">
        <h4 className="py-2 fw-bold" style={{ color: "#ed2d16", fontSize: "26px" }}>
          Mock Interviews
        </h4>
        <div className="d-flex justify-content-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ed2d16"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"></path>
            </svg>
            &nbsp;
          </div>
          <div className="col-11">
            <p style={{ textAlign: "justify" }}>
              Mock interviews by Speedup Infotech give you the platform to prepare, practice, and experience the real-life job interview. Familiarizing yourself with the interview environment beforehand in a relaxed and stress-free environment gives you an edge over your peers.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ed2d16"
              className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"></path>
            </svg>
            &nbsp;
          </div>
          <div className="col-11">
            <p style={{ textAlign: "justify" }}>
              In our mock interviews, you’ll be conducted by industry best experts in{" "}
              <b style={{ color: "#ed2d16" }}>MERN Stack Training, Python Full Stack Training, Data Science, and Data Analyst Training</b> in Pune with an average experience of 10+ years. So, you're sure to improve your chances of getting hired!
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-start py-2">
          <button
            className="btn"
            style={{
              backgroundColor: "#ed2d16",
              color: "white",
              borderRadius: "8px",
            }}
            onClick={() => nav("/hirefromus")}
          >
            Know More About Mock Interviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockInterviews;
