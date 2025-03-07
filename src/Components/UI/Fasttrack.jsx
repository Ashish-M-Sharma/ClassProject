import React from "react";
import comp from "../../almabetter resoures/comp.jpg";
import "../../Css/Fastrack.css";

const Fasttrack = () => {
  return (
    <div className="fasttrack-container">
      <div className="fasttrack-text">
        <h1 className="fasttrack-description">
          Fast-track your success with the{" "}
          <span style={{ color: "#ed2d16" }}>SpeedUp Infotech</span> Community
        </h1>
        <p>Connect, Collaborate and thrive with best tech companies</p>
      </div>
      <div className="fasttrack-image">
        <img src={comp} alt="companies-graph" />
      </div>
    </div>
  );
};

export default Fasttrack;
