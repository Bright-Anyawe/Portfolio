import { useState } from "react";

import { Header } from "./Components/Header";
import SideMessage from "./Components/sideMessage";
import { Greeting } from "./Components/HeroSection";
import { Experience } from "./Components/Experience";
import { FeaturedProject } from "./Components/FeaturedProject";
import { ContactSection } from "./Components/ContactSection";
import { PersonalInfo } from "./Components/PersonalInfo";
import { ProjectExhibition } from "./Components/ProjectExhibition";
import { Footer } from "./Components/Footer";

// import "./Styles/App.css";

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
