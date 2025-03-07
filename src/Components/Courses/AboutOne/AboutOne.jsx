import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const AboutOne = () => {
  const location = useLocation(); // Get the current location
  const [selectedCourse, setSelectedCourse] = useState("MERN Stack");

  const courseData = {
    "/mernstack": {
      title: "MERN Stack",
      description: `MERN Stack covers MongoDB, Express.js, React.js, and Node.js. This course provides full-stack JavaScript knowledge from front-end React to back-end Node.js with a NoSQL database MongoDB.`,
      accordionData: [
        {
          title: "MongoDB: Designing Scalable Databases",
          content: "Dive into MongoDB, a powerful NoSQL database, to learn how to design and manage scalable, document-oriented databases. Understand concepts like indexing, aggregation, and schema design to optimize your data storage for modern web applications.",
        },
        {
          title: "Express.js & Node.js: Secure Backend Development",
          content: "Master the art of building secure and scalable backend systems using Node.js and Express.js. Learn about middleware, routing, error handling, and API integration to create robust server-side applications for dynamic websites.",
        },
        {
          title: "React.js: Interactive User Interface Development",
          content: "Explore React.js to create dynamic and interactive single-page applications. Grasp concepts like component-based architecture, state management with hooks, and real-time data binding to deliver seamless user experiences.",
        },
      ],
      carouselData: [
        "Trainings by Certified Experts",
        "100% Placement Assistance",
        "Affordable Fees",
        "Free Demo Sessions",
        "Flexible Timings",
      ],
      basicContent: [
        {
          title: "JavaScript Basics",
          content: "Core syntax, ES6 features, and modern frameworks.",
        },
        {
          title: "HTML & CSS Basics",
          content: "Understanding layouts, styling, and responsive designs.",
        },
        {
          title: "JavaScript DOM Manipulation",
          content: "Dynamic web page updates and interactivity.",
        },
        {
          title: "Overview of Full-Stack Development",
          content: "The role of MongoDB, Express.js, React.js, and Node.js.",
        },
        {
          title: "API Integration Basics",
          content: "Connecting front-end and back-end through REST APIs.",
        },
      ],
    },
    "/pythonfullstack": {
      title: "Python Full Stack",
      description: `Python Full Stack Development covers back-end frameworks like Django/Flask and front-end technologies. Learn Python programming, web development, and API integration.`,
      accordionData: [
        {
          title: "Python Basics",
          content: "Learn Python fundamentals, data structures, and algorithms.",
        },
        {
          title: "Django Framework",
          content: "Master Django to build robust and secure back-end applications.",
        },
        {
          title: "Front-End Development",
          content: "Understand HTML, CSS, and JavaScript for interactive UI.",
        },
      ],
      carouselData: [
        "Expert Trainers",
        "Practical Assignments",
        "Job Assistance",
        "Flexible Timings",
      ],
      basicContent: [
        {
          title: "HTML, CSS, and JavaScript",
          content: "Learn the basics of front-end development.",
        },
        {
          title: "Python Syntax and Basics",
          content: "Functions, loops, OOP concepts, and error handling.",
        },
        {
          title: "Django and Flask",
          content: "Learn how to build robust back-end frameworks.",
        },
        {
          title: "Database Basics",
          content: "SQL for relational databases and SQLite usage in Django.",
        },
        {
          title: "API Development",
          content: "REST APIs with Django REST Framework.",
        },
      ],
    },

    "/datascience": {
      title: "Data Science",
      description: `Data Science training covers data analysis, visualization, and machine learning using Python, R, and modern tools like TensorFlow. Learn data wrangling, model building, and interpretation of results.`,
      accordionData: [
        {
          title: "Python for Data Science",
          content: "Learn Python libraries such as NumPy, pandas, and Matplotlib for data manipulation, visualization, and analysis.",
        },
        {
          title: "Statistics & Probability",
          content: "Understand the statistical and probabilistic foundations for data analysis, including hypothesis testing and distributions.",
        },
        {
          title: "Machine Learning Basics",
          content: "Introduction to supervised and unsupervised learning techniques such as regression, classification, and clustering.",
        },
        {
          title: "Deep Learning",
          content: "Learn neural networks and frameworks like TensorFlow and Keras for deep learning applications.",
        },
        {
          title: "Data Visualization with Tableau",
          content: "Master creating interactive dashboards and storytelling using Tableau for business insights.",
        },
      ],
      carouselData: [
        "Hands-on Projects",
        "Industry-Relevant Skills",
        "Expert Guidance",
        "Flexible Timings",
        "Placement Assistance",
      ],
      basicContent: [
        {
          title: "Python Basics",
          content: "Syntax, loops, functions, and OOP concepts essential for data science.",
        },
        {
          title: "Data Analysis with Excel",
          content: "Learn to analyze data with pivot tables, charts, and Excel formulas.",
        },
        {
          title: "Introduction to SQL",
          content: "Learn how to query databases and manage structured data.",
        },
        {
          title: "Understanding Data Formats",
          content: "Work with CSV, JSON, and Excel files for data processing.",
        },
        {
          title: "Data Cleaning Basics",
          content: "Identify and fix missing or inconsistent data.",
        },
      ],
    },
    "/dataanalyst": {
      title: "Data Analyst",
      description: `The Data Analyst course focuses on using tools like SQL, Excel, and Power BI to analyze and present data. Learn how to interpret data for business insights and decision-making.`,
      accordionData: [
        {
          title: "SQL for Data Analysis",
          content: "Master SQL queries, joins, and aggregations for analyzing data in relational databases.",
        },
        {
          title: "Data Visualization with Power BI",
          content: "Create interactive dashboards and reports for effective decision-making.",
        },
        {
          title: "Advanced Excel Techniques",
          content: "Learn advanced Excel formulas, pivot tables, and macros for data processing.",
        },
        {
          title: "Statistical Analysis",
          content: "Understand statistical measures and hypothesis testing for data-driven insights.",
        },
        {
          title: "Business Intelligence Basics",
          content: "Learn how to translate data into actionable business insights.",
        },
      ],
      carouselData: [
        "Industry-Oriented Curriculum",
        "Job Assistance",
        "Experienced Trainers",
        "Flexible Learning Options",
        "Practical Assignments",
      ],
      basicContent: [
        {
          title: "Introduction to Data Analysis",
          content: "Overview of data analysis processes and methodologies.",
        },
        {
          title: "Excel Fundamentals",
          content: "Basics of Excel for organizing and analyzing data.",
        },
        {
          title: "Introduction to Databases",
          content: "Learn about relational databases and their structure.",
        },
        {
          title: "Data Cleaning Basics",
          content: "Techniques to clean raw data for analysis.",
        },
        {
          title: "Power BI Basics",
          content: "Introduction to Power BI for data visualization.",
        },
      ],
    },
  };

  // Effect to update the selected course based on the URL
  useEffect(() => {
    const path = location.pathname.toLowerCase(); // Get the current pathname
    if (courseData[path]) {
      setSelectedCourse(path);
    } else {
      setSelectedCourse("/mernstack"); // Default course
    }
  }, [location.pathname]); // Runs whenever the URL changes

  return (
    <div className="container my-4">
      <h3 className="py-3">About {courseData[selectedCourse]?.title} Training</h3>

      <div className="row">
        {/* Course Details */}
        <div className="col-md-8">
          <p>{courseData[selectedCourse]?.description}</p>

          {/* Basic Content Section as Accordion */}
          {courseData[selectedCourse]?.basicContent && (
            <div className="accordion mb-4" id="basicAccordion">
              <h5 className="mb-3">Basic Concepts:</h5>
              {courseData[selectedCourse]?.basicContent.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`basicHeading${index}`}>
                    <button
                      className="accordion-button fw-bold"
                      style={{ background: "#ed2d16", color: "white" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#basicCollapse${index}`}
                      aria-expanded="true"
                      aria-controls={`basicCollapse${index}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`basicCollapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`basicHeading${index}`}
                    data-bs-parent="#basicAccordion"
                  >
                    <div className="accordion-body bg-light text-start">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Topics Section */}
          <div className="accordion" id="accordionExample">
            {courseData[selectedCourse]?.accordionData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button fw-bold"
                    style={{ background: "#ed2d16", color: "white" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body bg-light text-start">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel and Enquiry Form */}
        <div className="col-md-4">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {courseData[selectedCourse]?.carouselData.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  style={{
                    background: "#ed2d16",
                    color: "white",
                    padding: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <p className="text-center mb-0">{item}</p>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Enquiry Form */}
          <div className="card my-4 shadow">
            <div className="card-body">
              <h5 className="card-title text-center">Course Enquiry</h5>
              <form action="process.php" method="post">
                <div className="mb-3">
                  <input
                    type="text"
                    name="enq_name"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="enq_email"
                    className="form-control"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    name="enq_phone"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <button type="submit" className="btn w-100 text-white" style={{ background: "#ed2d16" }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
