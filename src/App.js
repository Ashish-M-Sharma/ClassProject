import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import React from "react";
import { Signup, Web } from "./Components/Pages";
// import Courses from "./Components/Courses";
import { Hero } from "./Components/Hero";
import { Transform } from "./Components/Transform";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Blog from "./Components/BlogPosts";
import Career from "./Components/Career";
import Placement from "./Components/Placement";
import HireFromUs from "./Components/HireFromUs";
// import Clients from "./Components/UI/Clients";
import WallOfLove from "./Components/WallOfLove";
// import Fastrack from "./Components/UI/Fasttrack";
// import TestimonialCard from "./Components/UI/TestimonialCard";
import Learn from "./Components/UI/Learn";
import Logodesign from "./Components/Logodesign";
import Websitedev from "./Components/Websitedev";
import Androiddev from "./Components/UI/Androiddev";
import Itstaffing from "./Components/UI/Itstaffing";
import Contactourteam from "./Components/Contactourteam";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import EnquiryForm from "./Components/UI/EnquiryForm";
import Navbar from "./Components/Navbar";
import RunningBanner from "./Components/UI/RunningBanner";
import Datascience from "./Components/Datascience";
import Mernstack from "./Components/Mernstack";
import Pythonfullstack from "./Components/Pythonfullstack";
import Dataanalyst from "./Components/Dataanalyst";
import CoursesMain from "./Components/CoursesMain";
import CourseBanner from "./Components/CourseBanner";
import LandingPage from "./Components/LandingPage";

export const Home = () => {
  return (
    <>
      {/* <RunningBanner /> */}
      <Hero />
      {/* <Clients /> */}
      {/* <CompanyCarousel /> */}
      <Transform />
      {/* <CoursesMain /> */}
      {/* <WorksSection /> */}
      <CourseBanner/>
      <WallOfLove /> 
      {/* <Learners /> */}
      {/* <Fastrack /> */}
      {/* <TestimonialCard /> */}
      {/* <Accelerate /> */}
      {/* <News /> */}
      {/* <Learn /> */}
      <LandingPage/>
    </>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <RunningBanner />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<Home />} />

        <Route path="/web" element={<Web />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/CoursesMain" element={<CoursesMain/> } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/placementsstatistics" element={<Placement />} />
        <Route path="/hirefromus" element={<HireFromUs />} />
        <Route path="/logodesign" element={<Logodesign />} />
        <Route path="/logodesign" element={<Logodesign />} />
        <Route path="/websitedev" element={<Websitedev />} />
        <Route path="/androidios" element={<Androiddev />} />
        <Route path="/itstaffing" element={<Itstaffing />} />
        <Route path="/ourteam" element={<Contactourteam />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/enquiryform" element={<EnquiryForm />} />



        <Route path="/datascience" element={<Datascience/>} />
        <Route path="/mernstack" element={<Mernstack/>} />
        <Route path="/pythonfullstack" element={<Pythonfullstack/>} />
        <Route path="/dataanalyst" element={<Dataanalyst/>} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
