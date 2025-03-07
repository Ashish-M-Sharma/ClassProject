import React from "react";
// import "../../Css/Clients.css";

import Marquee from "react-fast-marquee";

import student1 from "../../almabetter resoures/students/student (1).png";
import student2 from "../../almabetter resoures/students/student (2).png";
import student3 from "../../almabetter resoures/students/student (3).png";
import student4 from "../../almabetter resoures/students/student (4).png";
import student5 from "../../almabetter resoures/students/student (5).png";
import student6 from "../../almabetter resoures/students/student (6).png";
import student7 from "../../almabetter resoures/students/student (7).png";
import student8 from "../../almabetter resoures/students/student (8).png";
import student9 from "../../almabetter resoures/students/student (9).png";
import student10 from "../../almabetter resoures/students/student (10).png";
import student11 from "../../almabetter resoures/students/student (11).png";
import student12 from "../../almabetter resoures/students/student (12).png";
import student13 from "../../almabetter resoures/students/student (13).png";
import student14 from "../../almabetter resoures/students/student (14).png";
import student15 from "../../almabetter resoures/students/student (15).png";
import student16 from "../../almabetter resoures/students/student (16).png";
import student17 from "../../almabetter resoures/students/student (17).png";
import student18 from "../../almabetter resoures/students/student (18).png";
import student19 from "../../almabetter resoures/students/student (19).png";

const Students = () => {
  return (
    <>
      <style>{`
        .student-img {
          width: 150px;
          height: 150px;
          margin: 15px;
        }
      `}</style>
      <Marquee direction="left" className="client-banner">
        <img className="student-img" src={student1} alt="#" />
        <img className="student-img" src={student2} alt="#" />
        <img className="student-img" src={student3} alt="#" />
        <img className="student-img" src={student4} alt="#" />
        <img className="student-img" src={student5} alt="#" />
        <img className="student-img" src={student6} alt="#" />
        <img className="student-img" src={student7} alt="#" />
        <img className="student-img" src={student8} alt="#" />
        <img className="student-img" src={student9} alt="#" />
        <img className="student-img" src={student10} alt="#" />
        <img className="student-img" src={student11} alt="#" />
        <img className="student-img" src={student12} alt="#" />
        <img className="student-img" src={student13} alt="#" />
        <img className="student-img" src={student14} alt="#" />
        <img className="student-img" src={student15} alt="#" />
        <img className="student-img" src={student16} alt="#" />
        <img className="student-img" src={student17} alt="#" />
        <img className="student-img" src={student18} alt="#" />
        <img className="student-img" src={student19} alt="#" />
      </Marquee>
    </>
  );
};

export default Students;
