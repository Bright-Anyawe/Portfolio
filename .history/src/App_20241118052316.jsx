import { useState } from "react";
import {
  Header,
  ContactSection,
  Experience,
  FeaturedProject,
  HeroSection,
  PersonalInfo,
  ProjectExibition,
} from "./Components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PersonalInfo />
      <Experience />
      <FeaturedProject />
      <ProjectExibition />
      <ContactSection />
      <Header />
    </>
  );
}

export default App;
