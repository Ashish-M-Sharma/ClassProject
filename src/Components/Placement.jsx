import React, { useState } from "react";
import Clients from "./UI/Clients";
import indiamap from "../almabetter resoures/indian-map.png";
import impactbg from "../almabetter resoures/impact-bg.jpg";
import impactgraph from "../almabetter resoures/Impact-graph.png";
import worldmap from "../almabetter resoures/world-map.png";
import segmentgraph from "../almabetter resoures/segement-graph.png";
import placementgraph from "../almabetter resoures/placement-graph.png";
import Trainer from "../almabetter resoures/trainers.png";
import Students from "./UI/Students";
import "./Placement.css"; // Importing the CSS file for the component
import EnquiryForm from "./UI/EnquiryForm"; // Import the EnquiryForm component

const Placement = () => {
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false); // State to manage EnquiryForm visibility

  // Pdf file
  const handleDownload = () => {
    // Replace 'path_to_your_pdf_file.pdf' with the actual path to your PDF file
    const pdfPath = "MERN_Corporate_Training_Syllabus.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfPath.substr(pdfPath.lastIndexOf("/") + 1);

    // Firefox requires the link to be in the body
    document.body.appendChild(link);

    // Programmatically trigger the click event
    link.click();

    // Remove the link when done
    document.body.removeChild(link);

    // Show the EnquiryForm modal
    setEnquiryFormVisible(true);
  };

  return (
    <>
      <div className="placement-container">
        <h1 className="placement-title">Speedup Infotech's Achievements</h1>
        <p className="placement-description">
          Empowering Speedup learners to excel in tech with comprehensive
          courses and dedicated support for success.
        </p>
        <button className="placement-button">500+ Hiring Partners</button>
        <Clients />
        <button className="placement-button">96% Placement Record</button>
      </div>

      <Students />

      {/* Second section */}
      <div>
        <h1 className="text-center">
          Speedup Infotech Transforming tech{" "}
          <span className="highlight" style={{ background: "none" }}>
            Carrers
          </span>{" "}
          Nationwide
        </h1>
        <img className="center-image" src={indiamap} alt="map" />
      </div>

      {/* Third section */}
      <div className="impact-section">
        <div className="impact-content">
          <h1 className="text-center" style={{ color: "black" }}>
            Driving Impactful <br />
            <span className="highlight" style={{ color: "white" }}>
              Carrer Results
            </span>
          </h1>
        </div>

        <div className="impact-details">
          <div className="impact-text">
            <h1 className="highlight-text" style={{ background: "none" }}>
              Speedup Infotech setting the Benchmark
            </h1>
            <p className="bold-text">
              Our graduates consistently achieve remarkable career placements,
              boasting salaries that surpass industry standards by an impressive
              60%. At Speedup Infotech, our alumini emerge as some of the most
              sought-after professionals nationwide, with remunerations reaching
              as high as 10LPA, showcasing their excellence and success in the
              field.
            </p>
          </div>
          <div>
            <img
              src={impactgraph}
              alt="impact-graph"
              className="impact-graph"
              style={{ height: "400px", width: "400px" }}
            />
          </div>
        </div>
      </div>

      {/* Fourth section */}
      <div className="worldmap-section">
        <div className="worldmap-content">
          <div className="worldmap-text">
            <h1>Segmented by sectors</h1>
            <div>
              <p>
                At Speedup Infotech, our goal is to meticulously match students
                profiles with fitting roles and companies, providing them with
                the optimal head start for their career progression.
              </p>
              <button className="worldmap-button">
                Download Placement Report
              </button>
              <button className="worldmap-button" onClick={handleDownload}>
                Explore Course
              </button>
            </div>
          </div>
          <div>
            <img src={segmentgraph} alt="graph" className="worldmap-graph" />
          </div>
        </div>
      </div>

      {/* Fifth section */}
      <div style={{ padding: "20px" }}>
        <h1 className="text-center">
          Journey of our &nbsp;
          <span className="highlight" style={{ color: "#fff" }}>
            Alumini
          </span>
        </h1>
        <div className="journey-cards">
          <div className="journey-card">
            <h1>60%</h1>
            <p>Freshers secured jobs with above average packages.</p>
          </div>
          <div className="journey-card">
            <h1>40%</h1>
            <p>
              Learners experienced significant salary increases from their
              previous earnings.
            </p>
          </div>
        </div>
      </div>

      {/* Sixth section */}
      <div className="turnaround-section">
        <div className="turnaround-content">
          <div className="turnaround-text">
            <h1>Top Notch Industry Placement Turn around time</h1>
            <h1 className="" style={{ color: "red" }}>
              80<span style={{ color: "black" }}>%</span>
            </h1>
            <p>
              80% of learners secured placements within 180 days post-course
              completion
            </p>
            <h1 className="" style={{ color: "red" }}>
              100<span style={{ color: "black" }}>%</span>
            </h1>
            <p>100% of placements achieved withing a span of 20 weeks</p>
          </div>
          <div>
            <img
              src={placementgraph}
              alt="graph"
              className="turnaround-graph"
            />
          </div>
        </div>
      </div>

      {/* Seventh section */}
      <div className="placement-assistance-buttons">
        <button className="center-button">Download Placement Report</button>
        <button
          className="center-button outline-button"
          onClick={handleDownload}
        >
          Explore Course
        </button>
      </div>

      {/* Ninth section */}
      <div className="stars-section">
        <div className="stars-content">
          <p
            className="stars-text-content"
            style={{ color: "red", textAlign: "center" }}
          >
            Ensure 100% Placement Assistance with Speedup Infotech Career Track
          </p>
          <h1
            className="stars-text-content"
            style={{ fontSize: "25px", textAlign: "center" }}
          >
            Reach for the stars in your tech career aspirations
          </h1>
          <p className="stars-text-content" style={{ textAlign: "center" }}>
            Discover our courses and enroll today to start your journey
          </p>

          <div className="placement-assistance-buttons">
            <button className="center-button" onClick={handleDownload}>
              EXPLORE COURSES
            </button>
            <button className="center-button outline-button">
              TALK TO ADMISSION TEAM
            </button>
          </div>
          <img src={Trainer} alt="trainer" className="trainer-image" />
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {isEnquiryFormVisible && (
        <EnquiryForm
          isVisible={isEnquiryFormVisible}
          onClose={() => setEnquiryFormVisible(false)} // Hide the form on close
        />
      )}
    </>
  );
};

export default Placement;
