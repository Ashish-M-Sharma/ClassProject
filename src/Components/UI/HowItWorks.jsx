import React from "react";
import "../../Css/HireFromUs.css";
import HTW1 from "../../almabetter resoures/HIW1.png";
import HTW2 from "../../almabetter resoures/HIW2.png";
import HTW3 from "../../almabetter resoures/HIW3.png";
import HTW4 from "../../almabetter resoures/HIW4.png";

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div>
        <h1>How it works</h1>
      </div>
      <div className="how-it-works-container">
        <div className="how-it-works-text">
          <img style={{ width: "100px", height: "auto" }} src={HTW1} alt="w1" />
          <h3 className="how-it-works-title">Book Demo</h3>
          <p>
            Set up a demo session to learn more about our hiring solution
            firsthand.
          </p>
        </div>
        <div className="how-it-works-text">
          <img style={{ width: "100px", height: "auto" }} src={HTW2} alt="w1" />
          <h3 className="how-it-works-title">Shortlist top candidates</h3>
          <p>
            Streamline your hiring process by connecting directly with our top
            performers, saving valuable time.
          </p>
        </div>
        <div className="how-it-works-text">
          <img style={{ width: "100px", height: "auto" }} src={HTW3} alt="w1" />
          <h3 className="how-it-works-title">Conduct Interviews</h3>
          <p>
            Take control of your interviews or utilize our in-house
            video-interview platform for effortless and efficient interviewing.
          </p>
        </div>
        <div className="how-it-works-text">
          <img style={{ width: "100px", height: "auto" }} src={HTW4} alt="w1" />
          <h3 className="how-it-works-title">Hire free of cost</h3>
          <p>
            Our services come with no charges, providing partnered recruiters
            with efficient and trustworthy hiring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
