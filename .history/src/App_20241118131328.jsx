import { useState, useRef } from "react";

import { Header } from "./Components/Header";
import SideMessage from "./Components/sideMessage";
import { Greeting } from "./Components/HeroSection";
import { Experience } from "./Components/Experience";
import { FeaturedProject } from "./Components/FeaturedProject";
import { ContactSection } from "./Components/ContactSection";
import { PersonalInfo } from "./Components/PersonalInfo";
import { ProjectExhibition } from "./Components/ProjectExhibition";
import { Footer } from "./Components/Footer";
import "animate.css";
import { createContext } from "react";

const GeneralContext = createContext(null)

function App() {


  const greetingTextRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class when the element comes into view
          entry.target.classList.add(
            "animate__animated",
            "animate__backInDown"
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5, // Adjust the threshold as per your requirement
    });

    if (greetingTextRef.current) {
      observer.observe(greetingTextRef.current);
    }

    return () => {
      if (greetingTextRef.current) {
        observer.unobserve(greetingTextRef.current);
      }
    };
  }, []);
  return (
    <>

    <GeneralContext value={}>

  <Header />
      <SideMessage/>
      <Greeting />
      <PersonalInfo />
      <Experience />
      <FeaturedProject />
      <ProjectExhibition />
      <ContactSection />
      <Footer />
    </GeneralContext>
    
    </>
  );
}

export default App;
