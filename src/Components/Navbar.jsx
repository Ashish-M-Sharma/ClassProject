import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../almabetter resoures/logo.png";
import "../Css/Navbar.css";
import EnquiryForm from "./UI/EnquiryForm";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isEnquiryFormVisible, setEnquiryFormVisible] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1120) {
      setSideBar(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnquiryFormVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className={`sp-navbar ${sideBar ? "active" : ""}`}>
        <div className="sp-navbar-container">
          <div className="sp-navbar-mobile">
            <div className="sp-navbar-toggle" onClick={toggleSidebar}>
              <span className="sp-navbar-toggle-icon"></span>
              <span className="sp-navbar-toggle-icon"></span>
              <span className="sp-navbar-toggle-icon"></span>
            </div>
            <div className="sp-navbar-logo">
              <NavLink to="/" onClick={closeSidebar}>
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="sp-navbar-enquire">
              <button
                className="sp-enquire-button"
                onClick={() => setEnquiryFormVisible(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div className="sp-main-navbar-logo">
            <NavLink to="/" onClick={closeSidebar}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="d-flex align-items-center gap-5">
            {" "}
            {/* NavItems start */}
            <nav className={`sp-navbar-menu ${sideBar ? "active" : ""}`}>
              <NavLink
                to="/aboutus"
                className="sp-navbar-link"
                onClick={closeSidebar}
              >
                About Us
              </NavLink>
              <div className="sp-navbar-dropdown">
                <NavLink
                  to="/CoursesMain"
                  className="sp-navbar-link"
                  onClick={() => toggleDropdown("courses")}
                >
                  Courses
                </NavLink>
                {activeDropdown === "courses" && (
                  <div className="sp-dropdown-menu">
                    <NavLink
                      to="/mernstack"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      MERN Stack
                    </NavLink>
                    <NavLink
                      to="/pythonfullstack"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Python Full Stack
                    </NavLink>
                    <NavLink
                      to="/datascience"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Data Science
                    </NavLink>
                    <NavLink
                      to="/dataanalyst"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Data Analyst
                    </NavLink>
                  </div>
                )}
              </div>
              <div className="sp-navbar-dropdown">
                <NavLink
                  to=""
                  className="sp-navbar-link"
                  onClick={() => toggleDropdown("services")}
                >
                  Services
                </NavLink>
                {activeDropdown === "services" && (
                  <div className="sp-dropdown-menu">
                    <NavLink
                      to="/logodesign"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Logo Design
                    </NavLink>
                    <NavLink
                      to="/websitedev"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Website Dev
                    </NavLink>
                    <NavLink
                      to="/androidios"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Android IOS
                    </NavLink>
                    <NavLink
                      to="/itstaffing"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      IT Staffing
                    </NavLink>
                  </div>
                )}
              </div>
              {/* <div className="sp-navbar-dropdown"> */}
              <NavLink
                to="/hirefromus"
                className="sp-navbar-link"
                onClick={() => toggleDropdown("courses")}
              >
                Placements
              </NavLink>
              {/* {activeDropdown === "courses" && (
                  <div className="sp-dropdown-menu">
                    <NavLink
                      to="/hirefromus"
                      className="sp-dropdown-item"
                      onClick={closeSidebar}
                    >
                      Hire From Us
                    </NavLink> */}
              {/* </div>
                )}
              </div> */}
              <NavLink
                to="/career"
                className="sp-navbar-link"
                onClick={closeSidebar}
              >
                Career
              </NavLink>
              <NavLink
                to="/blog"
                className="sp-navbar-link"
                onClick={closeSidebar}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contactus"
                className="sp-navbar-link"
                onClick={closeSidebar}
              >
                Contact Us
              </NavLink>
            </nav>
            {/* NavItems Ends */}
            <div className="sp-navbar-desktop-enquire">
              <button
                className="sp-enquire-button"
                onClick={() => setEnquiryFormVisible(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </header>
      {isEnquiryFormVisible && (
        <EnquiryForm
          isVisible={isEnquiryFormVisible}
          onClose={() => setEnquiryFormVisible(false)}
        />
      )}
      {showScrollTopButton && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Navbar;
