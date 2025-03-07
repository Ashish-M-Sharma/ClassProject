import React from "react";
import IMG1 from "../../src/almabetter resoures/teacher (1)@2x.png";
import IMG2 from "../../src/almabetter resoures/audience@2x.png";
import IMG3 from "../../src/almabetter resoures/success@2x.png";
import IMG4 from "../../src/almabetter resoures/onboarding@2x.png";
import IMG5 from "../../src/almabetter resoures/job-offer (1)@2x.png";

const ProgramCredentials = () => {
  const credentials = [
    {
      src: IMG1,
      title: "Industry Expert Trainers",
    },
    {
      src: IMG2,
      title: "400+ Students Enrolled",
    },
    {
      src: IMG3,
      title: "100% Success Ratio",
    },
    {
      src: IMG4,
      title: "Corporate Training for Students",
    },
    {
      src: IMG5,
      title: "100% Placement Assistance",
    },
  ];

  return (
    <>
      <div className="bg-white w-100 vw-100" style={{ minWidth: "100vw" }}>
        <div className="row">
          <div className="fw-bold fs-4 text-center mb-5 py-3">
            Program Core Credentials
          </div>

          <div
            className="d-flex flex-wrap justify-content-center gap-4 px-3"
            style={{ paddingBottom: "90px" }}
          >
            {credentials.map((val, ind) => (
              <div
                key={ind}
                className="rounded-4 d-flex flex-column justify-content-center align-items-center gap-3 p-3 custom-3d-card"
                style={{
                  maxWidth: "250px",
                  width: "100%",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
              >
                <img
                  src={val.src}
                  alt={val.title}
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
                <p className="fw-bold fs-5 text-center m-0">{val.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center gap-2 position-relative z-1 px-3"
        style={{ marginTop: "-25px" }}
      >
        <p
          className="text-white fs-4 fw-bold px-4 py-2 rounded-3 text-center"
          style={{ backgroundColor: "red", width: "100%", maxWidth: "400px" }}
        >
          Mock Interviews
        </p>
        <p
          className="text-light fw-semibold fs-6 text-center"
          style={{ padding: "0px 20px" }}
        >
          Mock interviews by Speedup Infotech give you the platform to prepare,
          practice, and experience the real-life job interview. Familiarizing
          yourself with the interview environment beforehand in a relaxed and
          stress-free environment gives you an edge over your peers.
        </p>
        <div
          style={{ width: "90%", height: "3px", backgroundColor: "white" }}
        ></div>
        <p
          className="text-light fw-semibold fs-6 text-center"
          style={{ padding: "0px 20px" }}
        >
          In our mock interviews, you’ll be conducted by industry best experts
          in MERN Stack Training, Python Full Stack Training, Data Science, and
          Data Analyst Training in Pune with an average experience of 10+ years.
          So, you're sure to improve your chances of getting hired!
        </p>
      </div>
    </>
  );
};

export default ProgramCredentials;
