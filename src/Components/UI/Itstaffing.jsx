import React from "react";
import { useNavigate } from "react-router-dom";

function Itstaffing() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/ourteam");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row mx-5 py-3">
          <div className=" subpage">
            <h3 style={{ textAlign: "center" }}>
              Our IT staffing solutions are second to none. Our frequently
              sourced positions include:{" "}
            </h3>

            <p style={{ textAlign: "center" }}>
              The IT sector will always play a key role in the economic growth
              of India, which is why our expert IT recruiters are constantly
              studying the trends and challenges of the industry. When it comes
              to IT hiring and recruitment, our own knowledge of industry
              standards, consultations with customers, and strong network of
              connections make us one of the best IT recruitment agencies in the
              country. At Speedup InfotechIndia, we have an unparalleled
              understanding of IT infrastructure and software recruitment. With
              experience in digital transformation, big data, machine learning,
              cloud computing, and more, our IT hiring and recruitment pros help
              source the highest quality talent for your business.
            </p>
          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>Featured Resources</h1>
        <div
          className="row py-4 mx-5"
          style={{
            backgroundColor: "#ed2d16",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card-it">
              <h2>RPO as an Agile Solution to Meet Critical Business Needs</h2>
              <p>
                Faced with the challenge of hiring a high volume of IT,
                technology, and engineering candidates, a leading business
                service provider turned to Speedup Infotech India for help. We
                deployed a three-month RPO program that increased candidate
                submissions by 10-15 profiles per day—thereby helping the client
                to add value to its workforce.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card-it">
              <h2 style={{ textAlign: "center" }}>
                RPO as an Agile Solution to Meet Critical Business Needs
              </h2>
              <p style={{ textAlign: "center" }}>
                Faced with the challenge of hiring a high volume of IT,
                technology, and engineering candidates, a leading business
                service provider turned to Speedup Infotech India for help. We
                deployed a three-month RPO program that increased candidate
                submissions by 10-15 profiles per day—thereby helping the client
                to add value to its workforce.
              </p>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card-it">
              <h2 style={{ textAlign: "center" }}>
                RPO as an Agile Solution to Meet Critical Business Needs
              </h2>
              <p style={{ textAlign: "center" }}>
                Faced with the challenge of hiring a high volume of IT,
                technology, and engineering candidates, a leading business
                service provider turned to Speedup Infotech India for help. We
                deployed a three-month RPO program that increased candidate
                submissions by 10-15 profiles per day—thereby helping the client
                to add value to its workforce.
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <h2 style={{ textAlign: "center" }}>
              Let us help you find the best in information technology.
            </h2>
            <p style={{ textAlign: "center" }}>
              Speedup Infotech India, an Aleron company, is a leading provider
              of comprehensive HR and recruitment process outsourcing solutions.
              Over the years, Speedup Infotech has delivered staffing services
              to some of India’s leading IT companies. With over 200 customers
              and over 200,000 assignments filled,Speedup Infotech offers a
              strategic, proactive, and flexible approach to staffing,
              recruiting, and hiring.
            </p>

            <div className="text-center py-4">
              <button
                style={{
                  backgroundColor: "#ed2d16",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                  justifyContent: "center",
                  margin: "auto",
                }}
                className="btn btn-light px-5 fw-bold text-center"
                onClick={handleChange}
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itstaffing;
