import React from "react";

function Contactourteam() {
  return (
    <div>
      <div className="" style={{ marginTop: "140px" }}>
        <div style={{ backgroundColor: "yellow" }}>
          <h1 style={{ textAlign: "center" }}>Contact To Speedup Infotech</h1>

          <div style={{ display: "flex", margin: "auto" }}>
            <div style={{ width: "50%" }}>
              <h1 style={{ textAlign: "center" }}>Contact Info</h1>
              <p style={{ textAlign: "center" }}>
                Address:Speedup Infotech, 3rd Floor, 1204/16, DNG House, Avenir
                Building, Jangali Maharaj Rd, opposite Bal Gandharv Police
                Station, beside Shree Gajanan Maharaj Temple, Shivajinagar,
                Pune, Maharashtra 411004
              </p>
            </div>
            <div>
              <form action="/" method="post">
                <div>
                  <label for="username">First Name:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="text">Last Name:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="text">Company Name:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    className="form-control"
                  />
                </div>

                <div>
                  <label for="reason">Tell us why you want to register: </label>
                  <br />
                  <textarea
                    name="comment"
                    id="reason"
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactourteam;
