import React, { useState } from "react";
import "../../Css/TestimonialCard.css";
import userI from "../../almabetter resoures/userI.png";
import EnquiryForm from "../UI/EnquiryForm"; // Import the EnquiryForm component

const TestimonialCard = () => {
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false); // State to manage EnquiryForm visibility

  // Pdf file
  const handleDownload = () => {
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

  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <div className="header">
          <h1>
            Step up your tech career with{" "}
            <span className="highlight" style={{color:'white'}}>Speedup Infotech</span>
          </h1>
          <button className="explore-button" onClick={handleDownload} >
            Explore Courses
          </button>
        </div>
        <div className="content">
          <div className="profile">
            <img src={userI} alt="someone" className="profile-image" />
            <div className="profile-info">
              <h2 className="name">Pooja Lende</h2>
              <p className="role">Senior Business Development Executive</p>
            </div>
          </div>
          <div className="feedback-section">
            <p className="feedback">
              Speedup Infotech takes pride in offering an unparalleled online
              curriculum meticulously crafted to captivate learners, foster deep
              understanding, and prioritize student success above all else. With
              a relentless focus on innovation and excellence, Speedup Infotech
              emerges as the ultimate platform for turbocharging your tech
              career, providing the tools, support, and guidance needed to
              thrive in today's rapidly evolving digital landscape.
            </p>
          </div>
        </div>
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

export default TestimonialCard;
