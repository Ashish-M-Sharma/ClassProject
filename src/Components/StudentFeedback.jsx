import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "../../src/almabetter resoures/scholar@2x.png";

const StudentFeedback = () => {
  return (
    <Container className="py-5 d-flex flex-column align-items-center">
      {/* Title Section */}
      <div className="text-center mb-4">
        <p
          className="text-white fw-bold fs-4 px-4 py-2 rounded-3 d-inline-block"
          style={{
            backgroundColor: "red",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          Student Feedback
        </p>
      </div>

      {/* Feedback Section */}
      <Row className="justify-content-center align-items-center text-center">
        {/* Image/Icon Section */}
        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center align-items-stretch"
        >
          <Card
            className="p-3 rounded-4 d-flex align-items-center w-100"
            style={{
              maxWidth: "250px",
              minHeight: "260px", // Matches the right side height
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            <img
              src={Image}
              alt="Student"
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </Col>

        {/* Feedback Text Section */}
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-stretch"
        >
          <Card
            className="p-4 rounded-5 text-center w-100"
            style={{
              backgroundColor: "white",
              maxWidth: "700px",
              minHeight: "260px", // Matches the left side height
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            <p className="fs-5 fw-medium">
              "Speedup Infotech provided me with a comprehensive and practical
              understanding of the MERN stack. The hands-on projects and
              real-world scenarios boosted my confidence as a developer. The
              mentors were always approachable and supportive throughout the
              training."
            </p>
            <p className="fw-bold text-danger fs-5">Rahul Sharma</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentFeedback;
