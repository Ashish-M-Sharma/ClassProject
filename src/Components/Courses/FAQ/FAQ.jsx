import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="container-fluid" id="faq">
      <div className="container">
        <h3 className="text-start py-3">Training FAQs - Speedup Infotech</h3>
        <div className="row">
          {/* Left side */}
          <div className="col-md-12 my-3">
            <div
              className="accordion accordion-flush"
              id="accordionExample"
              style={{ textAlign: "justify" }}
            >
              {/* FAQ 1 - MERN Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What is the MERN Stack, and why is it popular?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    The MERN Stack consists of MongoDB, Express.js, React.js, and Node.js. It is popular because it enables full-stack development using JavaScript, ensuring faster development and seamless integration between the front-end and back-end.
                  </div>
                </div>
              </div>

              {/* FAQ 2 - MERN Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What will I learn in the MERN Stack training program at Speedup Infotech?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    The MERN Stack training covers MongoDB for database management, Express.js for server-side frameworks, React.js for building user interfaces, and Node.js for server-side programming. You'll also work on real-time projects to gain practical experience.
                  </div>
                </div>
              </div>

              {/* FAQ 3 - MERN Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do you provide live projects for MERN Stack training?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    Yes, our MERN Stack training includes live projects that simulate real-world applications. You'll gain hands-on experience building and deploying full-stack applications.
                  </div>
                </div>
              </div>

              {/* FAQ 4 - MERN Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Are there any prerequisites for enrolling in the MERN Stack course?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    A basic understanding of JavaScript and HTML is helpful but not mandatory. The course begins with foundational concepts and gradually progresses to advanced topics in the MERN Stack.
                  </div>
                </div>
              </div>

              {/* FAQ 5 - MERN Stack */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do you provide placement assistance after completing the MERN Stack training?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    Yes, we provide 100% placement assistance, including resume building, mock interviews, and job referrals. Our goal is to prepare you for real-world job opportunities in MERN Stack development.
                  </div>
                </div>
              </div>

         
       
           

              {/* FAQ 9 - Data Science */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    What is Data Science, and why should I learn it?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    Data Science is the field of study that uses scientific methods, algorithms, and systems to extract insights from structured and unstructured data. Learning Data Science opens up career opportunities in fields like artificial intelligence, machine learning, and big data analysis.
                  </div>
                </div>
              </div>

              {/* FAQ 10 - Data Science */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    What tools and technologies will I learn in the Data Science training program?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    In Data Science training, you will learn Python, R, SQL, machine learning algorithms, data visualization tools like Tableau, and big data technologies such as Hadoop and Spark. You'll also work with real-world datasets to build models and make data-driven decisions.
                  </div>
                </div>
              </div>

              {/* FAQ 11 - Data Analyst */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingEleven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    What is the role of a Data Analyst, and what skills are required?
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    A Data Analyst is responsible for interpreting data and providing actionable insights to businesses. Key skills include proficiency in Excel, SQL, data visualization tools (like Power BI or Tableau), and a solid understanding of statistics.
                  </div>
                </div>
              </div>

              {/* FAQ 12 - Data Analyst */}
              <div className="accordion-item border shadow">
                <h2 className="accordion-header" id="headingTwelve">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                  >
                    Is coding necessary for a Data Analyst role?
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwelve"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    While coding is not mandatory, knowledge of programming languages like SQL, Python, and R is highly beneficial for Data Analysts. It allows you to manipulate data, automate tasks, and create advanced visualizations.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
