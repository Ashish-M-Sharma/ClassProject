import React from "react";
import { useLocation } from "react-router-dom";
import "./Glance.css"; // Import the CSS file

const Glance = () => {
  const location = useLocation();

  // Course details based on URL path
  const courseDetails = {
    "/mernstack": {
      title: "MERN Stack",
      stats: [
        { icon: "graduation-icon.png", value: "80+", label: "Batches" },
        { icon: "students-icon.png", value: "4000+", label: "Students" },
        { icon: "success-icon.png", value: "92%", label: "Success Rate" },
        { icon: "avg-salary-icon.png", value: "4 LPA", label: "Avg. Salary" },
        { icon: "avg-salary-icon.png", value: "10 LPA", label: "Max. Salary" },
      ],
    },
    "/pythonfullstack": {
      title: "Python Full Stack",
      stats: [
        // { icon: "graduation-icon.png", value: "20+", label: "Batches" },
        // { icon: "students-icon.png", value: "2000+", label: "Students" },
        // { icon: "success-icon.png", value: "85%", label: "Success Rate" },
        // { icon: "avg-salary-icon.png", value: "4.5 LPA", label: "Avg. Salary" },
        // { icon: "avg-salary-icon.png", value: "14 LPA", label: "Max. Salary" },
      ],
    },
    "/datascience": {
      title: "Data Science",
      stats: [
        { icon: "graduation-icon.png", value: "10+", label: "Batches" },
        { icon: "students-icon.png", value: "3500+", label: "Students" },
        { icon: "success-icon.png", value: "96%", label: "Success Rate" },
        { icon: "avg-salary-icon.png", value: "6 LPA", label: "Avg. Salary" },
        { icon: "avg-salary-icon.png", value: "10 LPA", label: "Max. Salary" },
      ],
    },
    "/dataanalyst": {
      title: "Data Analyst",
      stats: [
        { icon: "graduation-icon.png", value: "10+", label: "Batches" },
        { icon: "students-icon.png", value: "1500+", label: "Students" },
        { icon: "success-icon.png", value: "90%", label: "Success Rate" },
        { icon: "avg-salary-icon.png", value: "4.5 LPA", label: "Avg. Salary" },
        { icon: "avg-salary-icon.png", value: "12 LPA", label: "Max. Salary" },
      ],
    },
  };

  // Get the course stats based on the URL
  const courseInfo = courseDetails[location.pathname] || {
    title: "General Course",
    stats: [
      { icon: "graduation-icon.png", value: "50+", label: "Batches" },
      { icon: "students-icon.png", value: "3000+", label: "Students" },
      { icon: "success-icon.png", value: "95%", label: "Success Rate" },
      { icon: "avg-salary-icon.png", value: "5 LPA", label: "Avg. Salary" },
      { icon: "avg-salary-icon.png", value: "12 LPA", label: "Max. Salary" },
    ],
  };

  return (
    <section className="analytics-section">
      <h2
        className="section-title fw-bold"
        style={{ color: "black", fontSize: "2rem" }}
      >
        {courseInfo.title} AT A GLANCE
      </h2>
      <div className="stats-container">
        {courseInfo.stats.map((stat, index) => (
          <div className="stat-box text-center" key={index}>
            <img src={stat.icon} alt={stat.label} className="icon" />
            <h3>{stat.value}</h3>
            <p className="text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Glance;
