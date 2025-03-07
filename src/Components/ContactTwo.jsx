import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../src/almabetter resoures/SpeedupLogo.png";
import BuildingIcon from "../../src/almabetter resoures/Building Icon.png";
import LocationIcon from "../../src/almabetter resoures/Location Icon.png";
import CallIcon from "../../src/almabetter resoures/Call Icon.png";
import Website from "../../src/almabetter resoures/Website.png";

const FooterTwo = () => {
  return (
    <div
      className="container bg-white rounded-4 shadow-lg p-4 position-relative"
      style={{ marginTop: "80px" }}
    >
      <div className="row align-items-start">
        {/* Left Section */}
        <div className="col-lg-6 mb-4 position-relative">
          <img
            src={logo}
            alt="Logo"
            className="position-absolute border border-white bg-black px-3 py-2"
            style={{
              top: "-50px",
              left: "20px",
              width: "180px",
              height: "50px",
            }}
          />
          <h2 className="text-danger fw-bold d-flex align-items-center mt-5">
            Head Office
            <img src={BuildingIcon} alt="icon" className="ms-3" width={50} />
          </h2>
          <p className="d-flex align-items-center">
            <img
              src={LocationIcon}
              alt="Location"
              className="me-2"
              width={30}
            />
            3rd Floor, Avenir Building, JM Road, Pune - Maharashtra-411004
          </p>
          <p className="d-flex align-items-center">
            <img src={CallIcon} alt="Call" className="me-2" width={30} />
            +91 7219 777 599
          </p>
          <p className="d-flex align-items-center">
            <img src={Website} alt="Email" className="me-2" width={30} />
            support@speedupinfotech.com
          </p>
        </div>

        {/* Right Section - Map */}
        <div className="col-lg-6 text-center">
          <h2 className="text-danger fw-bold mb-3">Visit Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.5376703552347!2d73.84381847465221!3d18.52292376910344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1643f8c351%3A0x40ac02878f9919e5!2sSpeedUp%20Infotech!5e1!3m2!1sen!2sin!4v1740080611800!5m2!1sen!2sin"
            className="w-100 rounded border"
            height="200"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Links */}
      {/* <div className="row mt-4 text-center text-md-start">
        <div className="col-md-3">
          <h5 className="fw-bold">Services</h5>
          <ul className="list-unstyled">
            <li>Logo Design</li>
            <li>Website Development</li>
            <li>App Development</li>
            <li>IT Staffing</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="fw-bold">Company</h5>
          <ul className="list-unstyled">
            <li>Success Stories</li>
            <li>About Us</li>
            <li>Hire From Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="fw-bold">Courses</h5>
          <ul className="list-unstyled">
            <li>MERN Stack Development</li>
            <li>Python FullStack Development</li>
            <li>Data Science</li>
            <li>Data Analytics</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="fw-bold">Legal</h5>
          <ul className="list-unstyled">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div> */}

      {/* Social Media */}
      {/* <div className="text-center mt-4">
        <h5 className="text-danger fw-bold mb-3">Follow Us On</h5>
        <div className="d-flex justify-content-center gap-3">
          {[FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white bg-danger p-2 rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
              >
                <Icon size={20} />
              </a>
            )
          )}
        </div>
      </div> */}
    </div>
  );
};

export default FooterTwo;
