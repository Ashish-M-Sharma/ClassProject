import React from "react";
import "../Css/About.css";
import MarqueeBanner from "./UI/MarqueeBanner";
import InstituteImg from "../../src/almabetter resoures/inst photo@2x.png";
import ClassImg from "../../src/almabetter resoures/Class photo@2x.png";
import Target from "../../src/almabetter resoures/target (1)@2x.png";
import Vision from "../../src/almabetter resoures/vision@2x.png";
import LASTIMG from "../../src/almabetter resoures/2024-03-29@2x.png";

const About = () => {
  return (
    <>
      {/*About Start */}
      <div className="about-container">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div
              className="content-wrapper d-flex align-items-center"
              style={{ marginTop: "-60px" }}
            >
              {/* Left Section - Text */}
              <div className="text-content">
                <h2>
                  Empowering Careers with <br /> Cutting-Edge IT Skills
                </h2>
                <p>
                  The Speedup Infotech is the perfect choice for aspirers who
                  are looking for comprehensive and engaging MERN Stack, Python
                  Full Stack, Data Science, Data Analyst Training in Pune. Our
                  experienced trainers will teach you the basics of each
                  technology so that you can build powerful web applications
                  with ease to create robust web applications from scratch or
                  improve your current skillset using industry-standard
                  technologies.
                </p>
              </div>
              {/* Right Section - Image */}
              <div className="image-content">
                <img src={InstituteImg} alt="Institute" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*About Start */}

      {/* Why too choose SpeedUp  */}
      <div className="container-fluid position-relative">
        <div className="row">
          <div
            className="bg-light position-relative"
            style={{
              borderTopRightRadius: "40px", // Curves the right top corner
              borderBottomLeftRadius: "40px", // Curves the left bottom corner
            }}
          >
            {/* Floating Header */}
            <p
              className="bg-danger text-light fs-3 px-4 py-2 fw-bold w-25 rounded-3 top-0 start-0 translate-middle"
              style={{ marginLeft: "250px" }}
            >
              Why You Should Choose SpeedUp Infotech
            </p>

            {/* Text and Image Section */}
            <div
              className="d-flex w-100"
              style={{
                marginTop: "-116px",
                borderTopRightRadius: "40px", // Curves the right top corner
                borderBottomLeftRadius: "40px", // Curves the left bottom corner
                overflow: "hidden", // Ensures the curve applies properly
              }}
            >
              {/* Text Section */}
              <div className="w-75 fw-bold fs-5 px-4 d-flex justify-content-end align-items-center">
                Speedup Infotech offers comprehensive and engaging training
                programs for aspirants looking to enhance their skills in MERN
                Stack, Python Full Stack, and Data Science & Data Analytics. Our
                expert trainers will guide you through the core concepts, from
                building powerful web applications using MERN Stack with
                MongoDB, Express.js, React.js, and Node.js, to mastering Python
                with frameworks like Django and Flask for full-stack
                development. Additionally, you'll learn essential data analysis
                techniques, working with tools like Python, pandas, and NumPy,
                and apply machine learning algorithms with scikit-learn to gain
                valuable insights from data. Our training is designed to help
                you build real-world applications and gain job-ready skills to
                excel in the tech industry.
              </div>

              {/* Image Section */}
              <div className="w-50">
                <img
                  src={ClassImg}
                  alt="Class Image"
                  className="img-fluid"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why too choose SpeedUp  */}

      {/* Vision and Mission  */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Vision Card */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-3 shadow-lg border border-2 position-relative">
              <div className="position-absolute top-0 start-50 translate-middle">
                <h3 className="bg-danger text-white px-4 py-2 rounded-3 shadow">
                  VISION
                </h3>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <p className="text-dark fw-semibold mb-0 pe-3">
                  At SpeedUp Infotech, our vision is to empower individuals with
                  industry-relevant IT skills through high-quality training and
                  innovative learning methods. We strive to bridge the gap
                  between education and industry demands, ensuring our students
                  and professionals stay ahead in the ever-evolving tech
                  landscape. Our goal is to create a skilled workforce, foster
                  career growth, and contribute to the digital future through
                  excellence in IT education.
                </p>
                <img src={Vision} alt="Vision Icon" width="100" />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-3 shadow-lg border border-2 position-relative">
              <div className="position-absolute top-0 start-50 translate-middle">
                <h3 className="bg-danger text-white px-4 py-2 rounded-3 shadow">
                  MISSION
                </h3>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <p className="text-dark fw-semibold mb-0 pe-3">
                  Our mission at SpeedUp Infotech is to provide high-quality,
                  industry-focused IT training that equips students and
                  professionals with the skills needed to succeed in the tech
                  world. We are committed to delivering practical learning,
                  hands-on projects, and expert mentorship to bridge the gap
                  between education and real-world demands. Through innovation,
                  collaboration, and continuous learning, we aim to shape
                  future-ready professionals and drive career success.
                </p>
                <img src={Target} alt="Mission Icon" width="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision and Mission  */}

      {/* what we belive in  Section  */}
      <div className="container-fluid py-5">
        <div
          className="bg-white shadow-lg position-relative p-4"
          style={{
            width: "90vw", // Keeps width responsive
            marginLeft: "-1vw", // Moves it towards the left
            paddingLeft: "0", // Prevents unwanted spacing
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
        >
          {/* Floating Header */}
          <p
            className="bg-danger text-white fw-bold fs-3 px-4 py-2 rounded-3 position-absolute top-0 start-0 translate-middle"
            style={{
              marginLeft: "135px",
              whiteSpace: "nowrap", // Prevents text wrapping
              maxWidth: "90%", // Ensures text doesn't overflow in small screens
            }}
          >
            What we believe In
          </p>

          <div className="row align-items-center">
            {/* Left: Text Section */}
            <div className="col-lg-6 col-md-12 position-relative">
              {/* Background Overlay for Left Column */}
              <div
                className="position-absolute start-0 w-50"
                style={{
                  minHeight: "100%", // Ensures it occupies full height
                  height: "auto", // Allows it to adjust dynamically
                  top: "0",
                  bottom: "0",
                  background: "rgba(0, 0, 0, 0.07)", // Light contrast
                  borderRadius: "10px",
                  zIndex: "0",
                }}
              ></div>

              <div className="row position-relative" style={{ zIndex: "1" }}>
                {/* Left Column (Clarity & Excellence) */}
                <div className="col-md-6">
                  <div className="px-3">
                    <h4 className="text-danger fw-bold">Clarity</h4>
                    <p>
                      We keep our processes open and straightforward, ensuring
                      that students, trainers, and partners stay informed and
                      involved throughout their journey with us.
                    </p>

                    <h4 className="text-danger fw-bold">Excellence</h4>
                    <p>
                      We are dedicated to offering high-quality training and
                      advanced learning tools, helping our students reach their
                      full potential in IT.
                    </p>
                  </div>
                </div>

                {/* Right Column (Teamwork & Compassion) */}
                <div className="col-md-6">
                  <div className="px-3">
                    <h4 className="text-danger fw-bold">Teamwork</h4>
                    <p>
                      We believe in growing together through teamwork and shared
                      learning, creating a supportive community where knowledge
                      and success are collective goals.
                    </p>

                    <h4 className="text-danger fw-bold">Compassion</h4>
                    <p>
                      We recognize the unique experiences of each student and
                      provide a supportive environment that respects and
                      understands their individual needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image Section */}
            <div className="col-lg-6 col-md-12">
              <div
                className="position-relative overflow-hidden"
                style={{
                  maxWidth: "100%", // Ensures it doesn't stretch
                  borderTopRightRadius: "40px",
                  borderBottomRightRadius: "40px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={LASTIMG}
                  alt="Class Image"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what we belive in  Section  */}
    </>
  );
};

export default About;
