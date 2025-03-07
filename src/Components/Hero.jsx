import React, { useEffect, useState, useRef } from "react";
import "../Css/Hero.css";
import Form from "./UI/Form";
import EnquiryForm from "./UI/EnquiryForm";
import careerbg from "../almabetter resoures/careerbg.jpg";

export const Hero = () => {
  const [count, setCount] = useState(0);
  const dynamicContentRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false);

  const dynamicContent = [
    "SpeedUp Infotech",
    "Trainers",
    "Coding",
    "Mock Interviews",
  ];

  useEffect(() => {
    if (count > dynamicContent.length - 1) {
      setCount(0);
    }
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    if (dynamicContentRef.current) {
      setUnderlineWidth(dynamicContentRef.current.offsetWidth);
    }
  }, [count]);

  const handleDownload = () => {
    const pdfPath = "MERN_Corporate_Training_Syllabus.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.substr(pdfPath.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setEnquiryFormVisible(true);
  };

  return (
    <div
      className="hero-container text-center text-light"
      style={{
        backgroundImage: `url(${careerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-left">
        <div className="hero-head">
          <h1 className="text-uppercase">Unlock Your Potential with</h1>

          <p className="heading">
            SPEED<span style={{ color: "red" }}>UP</span> INFOTECH
          </p>
          <div className="hero-disc">
            <p className="text-center">
              <div
                className="mt-0 my-0"
                style={{ fontWeight: 500, fontSize: "20px" }}
              >
                Kickstart your journey with us!
              </div>
              <br /> Expert training in the latest technologies like{" "}
              <span style={{ color: "#fff" }}>
                MERN Stack, Python Full Stack, Data Science, and Data Analyst
                Training.{" "}
              </span>{" "}
              Let's build your future together! Unlock earning potential up to
              10 LPA.
            </p>
            <button
              className="text-uppercase px-3 py-2 btn mx-2"
              style={{
                color: "red",
                background: "white",
                fontWeight: "bolder",
              }}
              text="Explore Courses"
              onClick={handleDownload}
            >
              Explore Courses
            </button>
            <button
              className="text-uppercase px-3 py-2 btn mx-2"
              style={{
                color: "white",
                background: "red",
                fontWeight: "bolder",
              }}
              text="Explore Courses"
              onClick={handleDownload}
            >
              Book Demo Session
            </button>
          </div>
        </div>

        <div
          style={{
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "18%",
              minWidth: "150px",
              height: "200px",
              background: "white",
              borderRadius: "10px 40px",
              margin: "10px",
            }}
          ></div>
          <div
            style={{
              width: "18%",
              minWidth: "150px",
              height: "220px",
              background: "white",
              borderRadius: "10px 40px",
              margin: "10px",
            }}
          ></div>
          <div
            style={{
              width: "18%",
              minWidth: "150px",
              height: "250px",
              background: "white",
              borderRadius: "10px 40px",
              margin: "10px",
            }}
          ></div>
          <div
            style={{
              width: "18%",
              minWidth: "150px",
              height: "220px",
              background: "white",
              borderRadius: "10px 40px",
              margin: "10px",
            }}
          ></div>
          <div
            className="last-card"
            style={{
              width: "18%",
              minWidth: "150px",
              height: "200px",
              background: "white",
              borderRadius: "10px 40px",
              margin: "10px",
            }}
          ></div>
        </div>
      </div>

      {/* <div className="hero-right" style={{ display: "none" }}>
        <Form />
      </div> */}

      {isEnquiryFormVisible && (
        <EnquiryForm
          isVisible={isEnquiryFormVisible}
          onClose={() => setEnquiryFormVisible(false)}
        />
      )}
    </div>
  );
};

export default Hero;
