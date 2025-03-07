import React from "react";
import durationBg from "../../../assets/background1.jpeg";

const CourseDuration = () => {
  return (
    <>
      <div
        className="course-duration-container mt-5 mb-5"
        id="Background1"
        style={{
          background:'black',
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter: "brightness(0.3)",
          height: "65vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 className="text-light mb-4 fw-bold my-4">Corporate Project Based Training Duration</h1>
        <table className="table text-light text-center table-bordered w-50 bg-dark">
          <thead>
            <tr className="text-danger bg-light">
              <th>Track</th>
              <th>Week Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Course Duration</td>
              <td>4 Months</td>
            </tr>
            <tr>
              <td>Hours</td>
              <td>2-4 Hrs Per Day</td>
            </tr>
            <tr>
              <td>Training Mode</td>
              <td>Online/Offline</td>
            </tr>
          </tbody>
        </table>
        <a
                    href="https://api.whatsapp.com/send?phone=919975127827&text=Hello%2C%20I%20want%20to%20know%20about%20Speedup%20Infotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 mt-3"
                    style={{
                      background: "#ed2d16",
                      color: "#fff",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "18px",
                      transition: ".3s",
                      textDecoration: "none",
                      borderRadius: "6px",
                    }}
                  >
                    {" "}
                    Enquire Now
                  </a>
      </div>
    </>
  );
};

export default CourseDuration;
