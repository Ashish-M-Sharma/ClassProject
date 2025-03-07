// Dropdown.js

import React from "react";
import { NavLink } from "react-router-dom";

export const Dropdown = ({ hover, settingHover, data, id }) => {
  let decision = hover === id;
  return (
    <>
      <div
        className="nav-dropdown"
        style={{
          visibility: `${decision ? "visible" : "hidden"}`,
          transform: `translateY(${decision ? "0px" : "15px"})`,
        }}
        onMouseEnter={() => settingHover(id)}
      >
        <ul>
          {data.map((el, i) => (
            <li key={i} className="drop-list" style={{  backgroundColor:"white"}}>
              {/* Updated NavLink to navigate to the respective page */}
              <NavLink to={`/${el.toLowerCase().replace(/\s+/g, "")}`}  style={{ color:"black"}}>
                {el}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
