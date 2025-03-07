import React, { useState } from "react";
import "../../Css/Card.css";
import EnquiryForm from "../UI/EnquiryForm"; // Import the EnquiryForm component

const handleDownload = (setEnquiryFormVisible) => {
  // Replace 'path_to_your_pdf_file.pdf' with the actual path to your PDF file
  const pdfPath = 'MERN_Corporate_Training_Syllabus.pdf';

  // Create an anchor element
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = pdfPath.substr(pdfPath.lastIndexOf('/') + 1);

  // Firefox requires the link to be in the body
  document.body.appendChild(link);

  // Programmatically trigger the click event
  link.click();

  // Remove the link when done
  document.body.removeChild(link);

  // Show the EnquiryForm modal
  setEnquiryFormVisible(true);
};

export const Card = ({ image, heading, text, duration }) => {
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false); // State to manage EnquiryForm visibility

  return (
    <div className="card" style={{height:'500px'}}>
      <div className="card-upper">
        <div className="main-text">{heading}</div>
        <div className="description">{text}</div>
      </div>
      <div className="card-lower">
        <div className="course-decr-card">
          <div className="main-course-card">
            <div className="icon-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-clock-history"
                viewBox="0 0 16 16"
                color="#ed2d16"
              >
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
              </svg>
              <p>{duration} Months</p>
            </div>
            <div className="icon-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-mortarboard-fill"
                viewBox="0 0 16 16"
                color="#ed2d16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
              <p>Final Year Students & Graduates </p>
            </div>
          </div>
          <div className="main-course-card">
            <div className="icon-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-tv"
                viewBox="0 0 16 16"
                color="#ed2d16"
              >
                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
              </svg>
              <p>Part-time, online live classes</p>
            </div>
            <div className="icon-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-check-fill"
                viewBox="0 0 16 16"
                color="#ed2d16"
              >
                <path
                  fillRule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <p>100% Job Assurance</p>
            </div>
          </div>
        </div>
        <button className="course-cta-btn" onClick={() => handleDownload(setEnquiryFormVisible)}>Explore Course</button>
      </div>

      {/* Enquiry Form Modal */}
      {isEnquiryFormVisible && (
        <EnquiryForm
          isVisible={isEnquiryFormVisible}
          onClose={() => setEnquiryFormVisible(false)} // Hide the form on close
        />
      )}
    </div>
  );
};
