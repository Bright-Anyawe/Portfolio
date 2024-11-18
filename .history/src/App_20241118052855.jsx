import { useState } from "react";
import {
  Header,
  ContactSection,
  Experience,
  FeaturedProject,
  HeroSection,
  PersonalInfo,
  ProjectExhibition,
  Footer,
} from "./Components/Header";
import Her

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
