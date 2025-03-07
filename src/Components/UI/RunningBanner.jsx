import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../../Css/RunningBanner.css";
import EnquiryForm from "./EnquiryForm"; // Import the EnquiryForm
import ImageForm from "./ImageForm";
import newbatch from "../../almabetter resoures/Newbatch.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import Clock from "../../almabetter resoures/Clock_6@4x.png";

const RunningBanner = () => {
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false);
  const [nextBatchDate, setNextBatchDate] = useState("");

  // Function to calculate the next Monday or Thursday
  const getNextBatchDate = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

    let daysUntilNextMonday = (8 - dayOfWeek) % 7 || 1; // Days until next Monday
    let daysUntilNextThursday = (11 - dayOfWeek) % 7 || 1; // Days until next Thursday

    const nextMonday = new Date(
      today.getTime() + daysUntilNextMonday * 24 * 60 * 60 * 1000
    );
    const nextThursday = new Date(
      today.getTime() + daysUntilNextThursday * 24 * 60 * 60 * 1000
    );

    if (daysUntilNextMonday <= daysUntilNextThursday) {
      return nextMonday;
    } else {
      return nextThursday;
    }
  };

  useEffect(() => {
    const nextBatch = getNextBatchDate();
    setNextBatchDate(nextBatch.toDateString());
  }, []);

  const handleCloseEnquiryForm = () => {
    setEnquiryFormVisible(false);
  };

  return (
    <>
      <Marquee
        className="main-banner"
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        <div className="running-text">
          {/* Replace with new structure */}
          <div className="d-flex align-items-center gap-1">
            <BiSolidRightArrow className="text-danger fs-6" />
            <p className="fs-6 fw-semibold text-primary mb-0 text-nowrap">
              BOOK A LIVE DEMO SESSION
            </p>
          </div>
          &nbsp;&nbsp;
          <div className="d-flex align-items-center gap-1">
            <img src={Clock} alt="Clock Icon" className="clock-icon" />
            <p className="fs-6 fw-semibold text-primary mb-0 text-nowrap">
              LIMITED SEATS AVAILABLE
            </p>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="pulse-button"
            onClick={(e) => {
              e.stopPropagation();
              setEnquiryFormVisible(true);
            }}
          >
            BOOK NOW
          </button>
          {/* <a
            style={{ marginLeft: "20px", color: "#ed2d16", cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Upcoming Batch: {nextBatchDate}
          </a> */}
        </div>
      </Marquee>

      {/* Enquiry Form Modal */}
      {isEnquiryFormVisible && (
        <EnquiryForm
          isVisible={isEnquiryFormVisible}
          onClose={handleCloseEnquiryForm}
        />
      )}

      {/* Image Form Modal */}
      {/* {isImageFormVisible && (
        <ImageForm
          isVisible={isImageFormVisible}
          onClose={handleCloseImageForm}
          imageUrl={newbatch}
        />
      )} */}
    </>
  );
};

export default RunningBanner;
