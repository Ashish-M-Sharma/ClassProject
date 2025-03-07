import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import "./Curriculum.css";

const Curriculum = () => {
  const location = useLocation();

  // Course-specific syllabus data
  const syllabusData = {
    "/mernstack": {
      title: "MERN Stack Course Curriculum",
      downloadLink: "syllabus/MERN-Stack.pdf",
      sections: [
        {
          title: "HTML, CSS, and Bootstrap",
          description: `
            - Introduction to HTML: Semantic elements, forms, and multimedia
            - CSS Fundamentals: Selectors, box model, and positioning
            - Responsive design with CSS: Media queries and Flexbox/Grid
            - Introduction to Bootstrap: Components, utilities, and grid system
            - Creating responsive layouts using Bootstrap
            - Advanced CSS concepts: Animations, transitions, and transforms
          `,
        },
        {
          title: "JavaScript Basics",
          description: `
            - Core JavaScript concepts: Variables, data types, and operators
            - Functions, loops, and conditional statements
            - Objects, arrays, and basic DOM manipulation
            - Event handling and form validation
            - Debugging JavaScript code
            - ES6 features: Arrow functions, let/const, template literals, and destructuring
          `,
        },
        {
          title: "Node.js and Express.js",
          description: `
            - Introduction to Node.js: Modules, file system, and package management
            - Setting up an Express.js server and routing
            - Middleware in Express
            - Creating a REST API using Express
            - Error handling in Node.js applications
          `,
        },
        {
          title: "MongoDB Basics",
          description: `
            - Introduction to NoSQL databases
            - Setting up MongoDB and connecting with Node.js
            - CRUD operations in MongoDB
            - Data modeling in MongoDB
            - MongoDB Atlas and deployment
          `,
        },
        {
          title: "MySQL Basics",
          description: `
            - Introduction to SQL databases
            - Setting up MySQL and connecting with Node.js
            - CRUD operations in MySQL DB
            - Data modeling in My SQL DB
          `,
        },
        {
          title: "React Basics",
          description: `
            - Introduction to React and components
            - JSX and component rendering
            - Props, state, and event handling
            - Handling forms and input in React
            - React Router for navigation
            - React Hooks: useState, useEffect
          `,
        },
        {
          title: "Advanced React",
          description: `
            - Context API and state management
            - Redux and Redux Toolkit
            - React performance optimization
            - Code splitting and lazy loading
            - Error boundaries in React
          `,
        },
      ],
    },
    "/pythonfullstack": {
      title: "Python Full Stack Course Curriculum",
      downloadLink: "syllabus/Python-FullStack.pdf",
      sections: [
        {
          title: "Python Basics",
          description: `
            - Python syntax and variables
            - Data structures: Lists, tuples, and dictionaries
            - Control structures: If-else, loops
            - Functions and modules
            - File handling in Python
            - Exception handling in Python
          `,
        },
        {
          title: "Frontend Development",
          description: `
            - Introduction to HTML, CSS, and JavaScript
            - Responsive design with Bootstrap
            - DOM manipulation and event handling
            - Introduction to frontend frameworks
          `,
        },
        {
          title: "Backend Development with Django",
          description: `
            - Setting up Django projects and apps
            - Models, views, and templates in Django
            - Handling forms and validations
            - Authentication and authorization in Django
            - Django REST Framework basics
          `,
        },
        {
          title: "Database Management",
          description: `
            - Introduction to SQL and databases
            - Using Django with PostgreSQL
            - Writing complex queries and joins
            - Database migrations and schema changes
            - Using ORM (Object-Relational Mapping)
          `,
        },
        {
          title: "Testing and Deployment",
          description: `
            - Writing unit tests in Django
            - Setting up CI/CD pipelines
            - Deployment to cloud platforms (AWS, Heroku)
            - Monitoring and logging Django applications
          `,
        },
      ],
    },
    "/datascience": {
      title: "Data Science Course Curriculum",
      downloadLink: "syllabus/Data-Science.pdf",
      sections: [
        {
          title: "Introduction to Data Science",
          description: `
            - Overview of data science and its applications
            - Understanding data types and structures
            - Basics of statistics and probability
            - Introduction to data science tools (Python, R, Jupyter)
          `,
        },
        {
          title: "Python for Data Science",
          description: `
            - Numpy for numerical operations
            - Pandas for data manipulation
            - Matplotlib and Seaborn for data visualization
            - Data cleaning techniques in Python
            - Working with time series data
          `,
        },
        {
          title: "Machine Learning Basics",
          description: `
            - Supervised vs. unsupervised learning
            - Linear regression and classification
            - Model evaluation and optimization
            - Introduction to Scikit-Learn
            - Introduction to neural networks and deep learning
          `,
        },
        {
          title: "Data Preprocessing",
          description: `
            - Handling missing data
            - Data scaling and normalization
            - Feature engineering and selection
            - Dimensionality reduction techniques (PCA)
          `,
        },
        {
          title: "Advanced Machine Learning",
          description: `
            - Decision trees and random forests
            - Support vector machines (SVM)
            - Ensemble methods: Bagging and boosting
            - Hyperparameter tuning with GridSearchCV
          `,
        },
        {
          title: "Deep Learning with TensorFlow",
          description: `
            - Introduction to TensorFlow and Keras
            - Building neural networks in TensorFlow
            - Convolutional Neural Networks (CNN)
            - Recurrent Neural Networks (RNN)
          `,
        },
      ],
    },
    "/dataanalyst": {
      title: "Data Analyst Course Curriculum",
      downloadLink: "syllabus/Data-Analyst.pdf",
      sections: [
        {
          title: "Excel for Data Analysis",
          description: `
            - Advanced Excel techniques
            - Pivot tables and dashboards
            - Data visualization in Excel
            - VLOOKUP, INDEX, MATCH, and other functions
          `,
        },
        {
          title: "SQL for Data Analysis",
          description: `
            - Writing basic and advanced SQL queries
            - Joins, subqueries, and window functions
            - Data modeling and database design
            - Optimizing SQL queries for performance
          `,
        },
        {
          title: "Data Visualization Tools",
          description: `
            - Introduction to Power BI/Tableau
            - Creating interactive dashboards
            - Best practices for visual storytelling
            - Advanced charting techniques
            - Publishing and sharing visualizations
          `,
        },
        {
          title: "Data Analytics and Reporting",
          description: `
            - Key performance indicators (KPIs) and metrics
            - Building reports for business decision-making
            - Automating reports using Power BI or Tableau
            - Data-driven storytelling
          `,
        },
        {
          title: "Advanced Excel for Data Analysis",
          description: `
            - Macros and VBA for automation
            - Power Query and Power Pivot
            - Data cleaning and preparation in Excel
          `,
        },
      ],
    },
    // Default/fallback curriculum
    default: {
      title: "Featured Course Curriculum",
      downloadLink: "syllabus/Default.pdf",
      sections: [
        {
          title: "Introduction to Programming",
          description: `
            - Basics of coding
            - Understanding algorithms
            - Problem-solving techniques
            - Introduction to programming languages
          `,
        },
        {
          title: "Getting Started with Frontend",
          description: `
            - HTML, CSS, and JavaScript overview
            - Building your first web page
            - Basic web design principles
          `,
        },
        {
          title: "Building Interactive Websites",
          description: `
            - Introduction to dynamic websites
            - Introduction to JavaScript frameworks
            - Adding interactivity with JavaScript
          `,
        },
      ],
    },
  };
  

  // Get syllabus data based on current path
  const path = location.pathname.toLowerCase();
  const syllabus = syllabusData[path] || syllabusData.default;

  return (
    <Container fluid className="mern-container" id="mern-curriculum">
      <Container>
        <h3 className="text-center py-5 fw-bold text-danger">
          {syllabus.title}
        </h3>

        {/* Download Button */}
        <Row>
          <Col md={12} className="text-center mb-4">
            <Button
              href={syllabus.downloadLink}
              target="_blank"
              className="btn btn-danger px-5 py-2 text-white fw-bold"
              download
            >
              Download Full Curriculum <i className="fa fa-download" aria-hidden="true"></i>
            </Button>
          </Col>
        </Row>

        {/* Accordion Section */}
        <Row>
          <Col md={12}>
            <Accordion defaultActiveKey="0">
              {syllabus.sections.map((section, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <span className="fw-bold text-danger">{section.title}</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-0" style={{ whiteSpace: "pre-wrap" }}>{section.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col md={12}>
            <div
              className="d-flex justify-content-between align-items-center px-4 py-3"
              style={{
                background: "#ed2d16",
                borderRadius: "8px",
              }}
            >
              <h5 className="text-white fw-bold mb-0">
                Need a Customized Curriculum for Your Learning Goals?
              </h5>
              <a
                href="https://api.whatsapp.com/send?phone=919975127827&text=Hello%2C%20I%20want%20to%20know%20about%20Speedup%20Infotech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success text-white px-4 py-2"
              >
                <i className="fa fa-whatsapp me-2"></i> Request Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Curriculum;
