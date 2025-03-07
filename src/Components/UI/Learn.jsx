import React from "react";
import "../../Css/Learn.css";
import disserver from "../../almabetter resoures/disserver.png";

const Learn = () => {
  return (
    <div className="learn-card">
      <div className="learn-card-header">
        <h1>
          Learn better together, with{" "}
          <span style={{ color: "#ed2d16" }}>SpeedUp Infotech</span> Community
        </h1>
        <p>
          Accelerate your career alongside dedicated tech professionals,
          students, mentors, and coaches in SpeedUp Infotech's Dynamic
          community.
        </p>
      </div>
      <div className="learn-card-body">
        <img src={disserver} alt="learn" />
      </div>
    </div>
  );
};

export default Learn;
