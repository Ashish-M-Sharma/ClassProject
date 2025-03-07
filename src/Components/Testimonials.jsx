import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import students from "../../src/almabetter resoures/trained students 2.png";

const testimonials = [
  {
    name: "Vaibhav Sharma",
    feedback:
      "It was great learning in Speedup. Instructors are experienced. Best place to start coding career but at the end you only have to put hard work from your side and get most out of it.",
  },
  {
    name: "Nishant Rai",
    feedback:
      "The institute's strong connections with industry leaders played a significant role in my job search. They facilitated networking opportunities and provided valuable insights into what employers are looking for.",
  },
  {
    name: "Abhang Wankhade",
    feedback:
      "It's the best teaching centre for freshers and experienced students. Good opportunity for freshers to build our career. Join training and grow our future.",
  },
  {
    name: "Ganesh Chavan",
    feedback:
      "The syllabus is thoughtfully designed to cover both the fundamentals and advanced topics, giving students a well-rounded understanding of MERN stack development and its applications.",
  },
  {
    name: "Omkar Lende",
    feedback:
      "I recently completed the React training program at Speed Up Infotech, and I must say, it was an absolute game-changer for my career.",
  },
];

const Testimonials = () => {
  return (
    <div className="position-relative bg-black py-5">
      {/* Title Positioned Above White Box */}
      <div
        className="text-center position-absolute start-50 translate-middle-x"
        style={{ top: "70px", zIndex: "10" }}
      >
        <p
          className="text-white fw-bold fs-4 px-4 py-2 rounded-3 d-inline-block"
          style={{
            backgroundColor: "red",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
          }}
        >
          What People Are Saying About Us
        </p>
      </div>

      {/* White Section with Cards */}
      <Container
        fluid
        className="bg-white position-relative p-5 mt-5"
        style={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          marginTop: "50px",
        }}
      >
        {/* Testimonials Cards */}
        <Row className="justify-content-center px-3">
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4 d-flex">
              <Card
                className="p-3 rounded-3 text-center w-100"
                style={{
                  minHeight: "200px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={students}
                    alt="Profile"
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                  <FcGoogle size={22} className="ms-auto" />
                </div>

                {/* Left-aligned stars under the name */}
                <div className="d-flex justify-content-start mt-3">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} color="gold" />
                    ))}
                </div>

                <p className="mt-2">{testimonial.feedback}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
