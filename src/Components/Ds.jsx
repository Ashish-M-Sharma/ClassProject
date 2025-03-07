import "bootstrap/dist/css/bootstrap.min.css";
import PythonBG from "../almabetter resoures/Python BG.png";
import DS from "../almabetter resoures/AIML.png";
import { toast } from "react-toastify";

export default function DSCourse() {
  // Inline styles
  const styles = {
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "white",
    },
    joinButton: {
      backgroundColor: "#dc3545",
      border: "none",
      fontWeight: "bold",
      padding: "0.5rem 1.5rem",
      color: "white",
    },
    syllabusButton: {
      backgroundColor: "#fff",
      color: "#dc3545",
      border: "none",
      fontWeight: "bold",
      padding: "0.5rem 1.5rem",
    },
    pythonLogo: {
      width: "250px",
      height: "250px",
      backgroundColor: "#dc3545",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      margin: "2rem auto",
    },
    formContainer: {
      backgroundColor: "#f8f9fa",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      color: "#000",
    },
    formHeading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      textAlign: "center",
    },
    formSubheading: {
      color: "#dc3545",
      textAlign: "center",
      marginBottom: "1rem",
    },
    formInput: {
      padding: "0.75rem",
      backgroundColor: "#f1f1f1",
      border: "1px solid #ced4da",
      borderRadius: "0.25rem",
      marginBottom: "1rem",
    },
    bookButton: {
      backgroundColor: "#dc3545",
      border: "none",
      fontWeight: "bold",
      padding: "0.75rem 2rem",
      width: "100%",
    },
    infoSection: {
      backgroundColor: "#f8f9fa",
      borderRadius: "0.5rem",
      overflow: "hidden",
      marginTop: "3rem",
      color: "#000",
    },
    infoTitle: {
      fontSize: "16px",
    },
    infoValue: {
      width: "100%",
      fontWeight: "bold",
      fontSize: "18px",
      textAlign: "center !important",
    },
    squareDiv: {
      width: "300px", // Define the size of the square
      height: "300px",
      backgroundColor: "#dc3545", // Color of the square
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "bold",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your demo session is booked successfully! 🎉", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div
      className="container-fluid course-container"
      style={{
        backgroundImage: `url(${PythonBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "300px",
        zIndex: 9,
      }}
    >
      <div style={styles.mainContainer}>
        <div className="container py-4">
          <div className="row g-4">
            {/* Left Section */}
            <div className="col-lg-6 col-md-12">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <h1 style={styles.heading}>Training In Data Science</h1>

                <div className="d-flex gap-3 mb-4 flex-column flex-sm-row">
                  <button className="btn" style={styles.joinButton}>
                    JOIN NOW
                  </button>
                  <button className="btn" style={styles.syllabusButton}>
                    DOWNLOAD SYLLABUS
                  </button>
                </div>
              </div>

              <div
                className="logo"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "60px",
                  paddingTop: "0",
                }}
              >
                <img src={DS} alt="Data Science" style={{ width: "90%" }} />
              </div>
            </div>

            {/* Right Section (Form) */}
            <div
              className="px-4 py-4 d-flex flex-column align-self-center mx-auto"
              style={{
                borderRadius: "10px",
                backgroundColor: "#CED4DA",
                width: "100%",
                maxWidth: "500px", // Restricts on larger screens
              }}
            >
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="text-center text-md-left">
                  <p className="text-black fw-bold fs-5 fs-md-4">
                    BOOK A LIVE DEMO SESSION
                  </p>
                  <p className="text-danger fw-bold fs-6 fs-md-5">
                    Register to attend free live session
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="mb-3 w-100 form-control"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="mb-3 w-100 form-control"
                />

                <select className="mb-3 w-100 form-select">
                  <option disabled selected>
                    Course Interest
                  </option>
                  <option>Web Development</option>
                  <option>Data Science</option>
                  <option>Cloud Computing</option>
                </select>

                <select className="mb-3 w-100 form-select">
                  <option disabled selected>
                    Graduation Year
                  </option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>

                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="mb-3 w-100 form-control"
                />

                <div
                  className="form-check mb-2 w-100"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="terms"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms"
                    style={{ fontSize: "12px" }}
                  >
                    By continuing, you confirm that you have read and agreed to
                    SpeedUp Infotech's Terms and Privacy Policy.
                  </label>
                </div>

                <button className="bg-danger text-light fw-bold btn w-100">
                  BOOK YOUR DEMO SESSION
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div style={styles.infoSection}>
            <div className="row text-center g-0">
              <div className="col-6 col-md-3 p-3 border-end">
                <h3 style={styles.infoTitle}>Duration</h3>
                <p style={styles.infoValue}>6 Months</p>
              </div>
              <div className="col-6 col-md-3 p-3 border-end">
                <h3 style={styles.infoTitle}>Eligibility</h3>
                <p style={styles.infoValue}>Graduations & Professionals</p>
              </div>
              <div className="col-6 col-md-3 p-3 border-end">
                <h3 style={styles.infoTitle}>Learning Mode</h3>
                <p style={styles.infoValue}>Online/Offline</p>
              </div>
              <div className="col-6 col-md-3 p-3">
                <h3 style={styles.infoTitle}>Next Batch</h3>
                <p style={styles.infoValue}>17th Feb 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
