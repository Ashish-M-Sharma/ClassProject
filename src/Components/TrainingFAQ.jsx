import React from "react";
import { Accordion } from "react-bootstrap";

const TrainingFAQ = () => {
  const faqs = [
    {
      question: "What is the MERN Stack, and why is it popular?",
      answer:
        "MERN Stack consists of MongoDB, Express.js, React.js, and Node.js. It is popular because it allows full-stack development using a single language: JavaScript.",
    },
    {
      question:
        "What will I learn in the MERN Stack training program at Speedup Infotech?",
      answer:
        "You will learn front-end and back-end development using React.js, Node.js, Express.js, and MongoDB, along with project-based learning.",
    },
    {
      question: "Do you provide live projects for MERN Stack training?",
      answer:
        "Yes, we provide real-world projects to ensure hands-on experience with MERN Stack development.",
    },
    {
      question:
        "Are there any prerequisites for enrolling in the MERN Stack course?",
      answer:
        "Basic knowledge of JavaScript and programming fundamentals is recommended but not mandatory.",
    },
    {
      question:
        "Do you provide placement assistance after completing the MERN Stack training?",
      answer:
        "Yes, we offer career guidance, resume building, and interview preparation support for job placements.",
    },
    {
      question: "What is Data Science, and why should I learn it?",
      answer:
        "Data Science involves analyzing data to extract insights and make data-driven decisions. It is a high-demand field with great career opportunities.",
    },
    {
      question:
        "What tools and technologies will I learn in the Data Science training program?",
      answer:
        "You will learn Python, SQL, Machine Learning, Data Visualization, and AI-based tools like TensorFlow and Scikit-Learn.",
    },
    {
      question:
        "What is the role of a Data Analyst, and what skills are required?",
      answer:
        "A Data Analyst interprets data, finds patterns, and provides insights. Skills required include SQL, Excel, Python, and data visualization.",
    },
    {
      question: "Is coding necessary for a Data Analyst role?",
      answer:
        "Basic coding skills in SQL and Python can be helpful but are not always mandatory for entry-level roles.",
    },
  ];

  return (
    <div className="container ">
      {/* Title Section */}
      <div className="text-center mb-4">
        <p
          className="text-danger fs-4 fw-bold px-4 py-2 rounded-3 d-inline-block"
          style={{
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          Training FAQ's - SpeedUp Infotech
        </p>
      </div>

      {/* FAQ Section */}
      <div className="container">
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default TrainingFAQ;
