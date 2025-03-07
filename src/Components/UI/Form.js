import React from "react";
import emailjs from "emailjs-com";
import "../../Css/Form.css";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_49ybvzw", // Replace with your EmailJS service ID
        "template_b8q04dl", // Replace with your EmailJS template ID
        e.target,
        "nQh1Kd5EzUbbO_ebv" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your enquiry has been sent successfully!");
          e.target.reset(); // Reset the form here
        },
        (error) => {
          console.log(error.text);
          alert(
            "There was an error sending your enquiry. Please try again later."
          );
        }
      );
  };

  return (
    <div className="hero-form-container">
      <h2 style={{fontSize:'24px'}} className="fw-bold">Book A Live Demo With Expert</h2>
      <p>Register to attend live class @05.00PM today</p>

      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Full Name" required />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Mail"
          required
        />
        <select
          className="hero-form-control"
          name="courses"
          id="status"
          required
        >
          <option value="">Your Course</option>
          <option value="Certification in MERN Stack Development">
            Certification in MERN Stack Development
          </option>
          <option value="Certification in Python Full Stack Development">
            Certification in Python Full Stack Development
          </option>
          <option value="Certification in Data Science">
            Certification in Data Science
          </option>
          <option value="Certification in Data Analyst">
            Certification in Data Analyst
          </option>
          
          <option value="Certification in React.js Development">
            Certification in React.js Development
          </option>
        </select>
        <select
          className="hero-form-control"
          name="graduationYear"
          id="graduationYear"
          required
        >
          <option value="">Graduation Year</option>
          {[...Array(21)].map((_, i) => (
            <option key={2010 + i} value={2010 + i}>
              {2010 + i}
            </option>
          ))}
        </select>
        <div>
          <input
            className="hero-form-control"
            type="text"
            name="phone"
            placeholder="Mobile Number"
            required
          />
        </div>
        <button className="hero-hero-form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
