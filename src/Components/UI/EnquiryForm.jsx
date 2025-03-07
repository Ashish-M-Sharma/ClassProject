import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../Css/EnquiryForm.css";

const EnquiryForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_49ybvzw", // Replace with your EmailJS service ID
        "template_b8q04dl", // Replace with your EmailJS template ID
        formData,
        "nQh1Kd5EzUbbO_ebv" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your enquiry has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", city: "" }); // Clear the form
        onClose();
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert(
          "There was an error sending your enquiry. Please try again later."
        );
      });
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="form-container">
        <button className="close-btn" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <button type="submit" className="hero-form-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
