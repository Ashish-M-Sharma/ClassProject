import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import img11 from "../../../assets/238.png";
import img12 from "../../../assets/241.png";
import img13 from "../../../assets/231.png";
import img14 from "../../../assets/232.png";
import img15 from "../../../assets/240.jpg";

const ApplicationTechnologies = () => {
  return (
    <div className="container-fluid my-2" id="overview">
      <div className="container">
        <h3 className="text-start py-3">
          Application Technologies to Learn in Full Stack Development
        </h3>

        <div className="d-flex justify-content-between flex-wrap">
          {/* Left Section */}
          <div className="col-md-8">
            <div className="accordion" id="accordionExample" style={{ textAlign: "justify" }}>
              {/* MERN Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingMERN">
                  <button
                    style={{ backgroundColor: "#f93333", color: "white", fontWeight: "bold" }}
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseMERN"
                    aria-expanded="true"
                    aria-controls="collapseMERN"
                  >
                    MERN Stack Technologies
                  </button>
                </h2>
                <div id="collapseMERN" className="accordion-collapse collapse show" aria-labelledby="headingMERN" data-bs-parent="#accordionExample">
                  <div className="accordion-body p-3">
                    {accordionItemsMERN.map((item, index) => (
                      <div key={index}>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Java Full Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingJava">
                  <button
                    style={{ backgroundColor: "#f93333", color: "white", fontWeight: "bold" }}
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseJava"
                    aria-expanded="false"
                    aria-controls="collapseJava"
                  >
                    Java Full Stack Technologies
                  </button>
                </h2>
                <div id="collapseJava" className="accordion-collapse collapse" aria-labelledby="headingJava" data-bs-parent="#accordionExample">
                  <div className="accordion-body p-3">
                    {accordionItemsJava.map((item, index) => (
                      <div key={index}>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testing Course */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingTesting">
                  <button
                    style={{ backgroundColor: "#f93333", color: "white", fontWeight: "bold" }}
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTesting"
                    aria-expanded="false"
                    aria-controls="collapseTesting"
                  >
                    Testing Course Technologies
                  </button>
                </h2>
                <div id="collapseTesting" className="accordion-collapse collapse" aria-labelledby="headingTesting" data-bs-parent="#accordionExample">
                  <div className="accordion-body p-3">
                    {accordionItemsTesting.map((item, index) => (
                      <div key={index}>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Images */}
          <div className="col-md-4 shadow">
            <div className="d-flex flex-wrap">
              {images.map((imgSrc, index) => (
                <div className="col-6 p-0 m-0" style={{ height: "fit-content" }} key={index}>
                  <img src={imgSrc} alt={`Course Image ${index}`} width="100%" height="160px" className="ps-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data for MERN Stack Accordion
const accordionItemsMERN = [
  {
    title: "MongoDB",
    content: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is highly scalable and can handle large amounts of data.",
  },
  {
    title: "Express.js",
    content: "Express.js is a lightweight web application framework for Node.js, used for building fast and scalable web applications and APIs.",
  },
  {
    title: "React.js",
    content: "React.js is a popular JavaScript library for building user interfaces, particularly single-page applications, using reusable components.",
  },
  {
    title: "Node.js",
    content: "Node.js is a JavaScript runtime that allows you to run JavaScript code outside of the browser, typically used for building backend applications.",
  },
];

// Data for Java Full Stack Accordion
const accordionItemsJava = [
  {
    title: "Java Spring Framework",
    content: "The Spring Framework is a powerful, feature-rich framework for building Java-based enterprise applications, providing support for web, security, and database integration.",
  },
  {
    title: "Hibernate",
    content: "Hibernate is an ORM (Object-Relational Mapping) tool for Java, simplifying the process of interacting with relational databases.",
  },
  {
    title: "JSP / Servlets",
    content: "JavaServer Pages (JSP) and Servlets are used for creating dynamic web pages and applications in Java, with JSP being used to develop views and Servlets for request handling.",
  },
  {
    title: "JavaFX",
    content: "JavaFX is a framework for building rich desktop applications with modern UIs, using Java.",
  },
];

// Data for Testing Course Accordion
const accordionItemsTesting = [
  {
    title: "Manual Testing",
    content: "Manual testing involves human testers executing test cases without the use of automation tools, helping to ensure that software is functional and user-friendly.",
  },
  {
    title: "Automation Testing",
    content: "Automation testing uses tools like Selenium and JUnit to automate repetitive testing tasks, improving efficiency and consistency.",
  },
  {
    title: "Performance Testing",
    content: "Performance testing ensures that a software application performs under load, stress, and with scalability, to meet the expected performance requirements.",
  },
  {
    title: "Security Testing",
    content: "Security testing focuses on identifying vulnerabilities in an application, ensuring that it is protected against malicious attacks and data breaches.",
  },
];

// Image Sources
const images = [img11, img12, img13,img15, img14,];

export default ApplicationTechnologies;
