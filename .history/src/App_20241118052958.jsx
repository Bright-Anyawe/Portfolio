import { useState } from "react";
// import {
//   Header,
//   ContactSection,
//   Experience,
//   FeaturedProject,
//   HeroSection,
//   PersonalInfo,
//   ProjectExhibition,
//   Footer,
// } from "./Components/Header";
import { Header } from "./Components/Header";
import { ContactSection } from "./Components/ContactSection";
import { Experience } from "./Components/Experience";
import { FeaturedProject } from "./Components/FeaturedProject";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PersonalInfo />
      <Experience />
      <FeaturedProject />
      <ProjectExhibition />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
