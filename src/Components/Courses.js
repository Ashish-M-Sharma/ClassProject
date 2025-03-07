import React from "react";
import { useLocation } from "react-router-dom";
import "../Css/Courses.css";
import { Card } from "./UI/Card";

const Courses = () => {
  const location = useLocation();

  const courseData = {
    "/mernstack": [
      {
        heading: "Certification in MERN Stack Development",
        text: "Achieve job readiness in MERN Stack development within 6 months. Engage with the premier tech community in India. Secure your spot today and aim for jobs surpassing 5 LPA.",
        duration: 4,
      },
      {
        heading: "Certification in React.js Development",
        text: "Unlock your potential as a React.js expert in just 8 weeks. Join India's largest tech community for unparalleled support. Secure your seat today and pave your way to roles offering 5 LPA and beyond.",
        duration: 2.5,
      },
    ],
    "/pythonfullstack": [
      {
        heading: "Certification in Python Full Stack Development",
        text: "Learn end-to-end development with Python, covering Django/Flask for backend and HTML, CSS, and JavaScript for frontend in 6 months. Prepare for roles offering salaries beyond 6 LPA.",
        duration: 4,
      },
      {
        heading: "Certification in Django Framework",
        text: "Master Django to build secure and robust backends in just 8 weeks. Gain expertise to excel in Python Full Stack development roles.",
        duration: 2,
      },
    ],
    "/datascience": [
      {
        heading: "Certification in Data Science",
        text: "Master data analysis, visualization, and machine learning techniques in 6 months. Join India's leading tech community and secure roles beyond 6 LPA.",
        duration: 6,
      },
      {
        heading: "Certification in Python for Data Science",
        text: "Learn Python for data analysis and visualization in just 8 weeks. Become job-ready and join roles in the data science domain with salaries over 5 LPA.",
        duration: 2,
      },
    ],
    "/dataanalyst": [
      {
        heading: "Certification in Data Analytics",
        text: "Learn SQL, Excel, and Power BI in 6 months. Join India's largest tech community to prepare for data analyst roles offering salaries beyond 6 LPA.",
        duration: 6,
      },
      {
        heading: "Certification in Excel for Data Analysis",
        text: "Master advanced Excel skills in just 4 weeks. Gain expertise to kickstart your journey in data analysis roles with salaries exceeding 4 LPA.",
        duration: 1,
      },
    ],
    // Default courses or fallback content
    default: [
      {
        heading: "Certification in MERN Stack Development",
        text: "Achieve job readiness in MERN Stack development within 4 months. Engage with the premier tech community in India. Secure your spot today and aim for jobs surpassing 5 LPA.",
        duration: 4,
      },
      {
        heading: "Certification in Python In Full Stack Development",
        text: "Learn end-to-end development with Python, covering Django/Flask for backend and HTML, CSS, and JavaScript for frontend in 4 months. Prepare for roles offering salaries beyond 6 LPA.",
        duration: 4,
      },
      
      
    ],
  };

  const path = location.pathname.toLowerCase();
  const coursesToDisplay = courseData[path] || courseData.default;

  return (
    <div className="courses-container">
      <div className="courses-main">
        <div className="courses-heading">
          <h1>Featured Courses</h1>
          <p>
            Turn your ambitions into reality with our coding-centric courses,
            delivering hands-on, intensive learning experiences.
          </p>
        </div>
        <div className="courses-card">
          {coursesToDisplay.map((course, index) => (
            <Card
              key={index}
              heading={course.heading}
              text={course.text}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
