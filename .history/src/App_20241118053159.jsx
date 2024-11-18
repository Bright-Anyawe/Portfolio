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
import { Greeting } from "./Components/HeroSection";
import { Experience } from "./Components/Experience";
import { FeaturedProject } from "./Components/FeaturedProject";
import { ContactSection } from "./Components/ContactSection";
import { PersonalInfo } from "./Components/PersonalInfo";
import { ProjectExhibition } from "./Components/ProjectExhibition";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Greeting />
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
