import React from "react";

const RoleSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-xl md:text-3xl font-extrabold text-center mb-8 uppercase text-light py-3">
            WE TRAIN THE RIGHT CANDIDATES FOR THE RIGHT ROLES
          </h2>
          <div className="w-100 d-flex py-4">
            <div className="w-25 text-light fs-5">
              <p>Back end Developer</p>
              <p>Node js Developer</p>
              <p>Business Analyst</p>
            </div>
            <div className="w-25 text-light fs-5">
              <p>React js Developer</p>
              <p>UI/UX Designer</p>
              <p>Marketing Analyst</p>
              <p>Operations Analyst</p>
            </div>
            <div className="w-25 text-light fs-5">
              <p>Full Stack Developer</p>
              <p>Web & App Developer</p>
              <p>Financial Analyst</p>
              <p>Statistician</p>
            </div>
            <div className="w-25 text-light fs-5">
              {" "}
              <p>Software Developer</p>
              <p>Data Analyst</p>
              <p>Product Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleSection;
