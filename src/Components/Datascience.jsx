import React from "react";
import "../Components/Courses/global.css";
import Hero from "./Courses/Hero/Hero";
import ProgramCredentials from "./Courses/ProgramCredentials/ProgramCredentials";
import CourseDuration from "./Courses/CourseDuration/CourseDuration";
import AboutOne from "./Courses/AboutOne/AboutOne";
import ApplicationTechnologies from "./Courses/ApplicationTechnologies/ApplicationTechnologies";
import Curriculum from "./Courses/Curriculum/Curriculum";
import MockInterviews from "./Courses/MockInterviews/MockInterviews";
import RelatedCourses from "./Courses/RelatedCourses/RelatedCourses";
// import Testimonials from "./Courses/Testimonials/Testimonials";
import Feedback from "./Courses/Feedback/Feedback";
import FAQ from "./Courses/FAQ/FAQ";
import Certificate from "./Courses/Certificate/Certificate";
import ProgramHighlights from "./Courses/ProgramHighlights/ProgramHighlights";
import LearnAndPractice from "./Courses/LearnAndPractice/LearnAndPractice";
import Glance from "./Glance";
import DSCourse from "./Ds";
import ProgramCrediantials from "./ProgramCrediantials";
import LearnPracticeMore from "./LearnPracticeMore";
import TrainingFAQ from "./TrainingFAQ";
import StudentFeedback from "./StudentFeedback";
import Testimonials from "./Testimonials";
import { ToastContainer } from "react-toastify";

const Datascience = () => {
  return (
    <>
      <DSCourse />
      {/* Other Sections */}
      <ProgramCrediantials />
      <LearnPracticeMore />
      <TrainingFAQ />
      <StudentFeedback />
      <Testimonials />

      {/* Toaster Notification */}
      <ToastContainer />
      {/* <Hero />
      <Glance/>
      <AboutOne />
      <CourseDuration />
      <ProgramCredentials />
      <Curriculum />
      <MockInterviews />
      <LearnAndPractice />
      <ProgramHighlights />
      <Certificate />
      <FAQ />
      <Feedback />
      <Testimonials />
      <RelatedCourses /> */}
    </>
  );
};

export default Datascience;
