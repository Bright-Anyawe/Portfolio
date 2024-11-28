import { useState, useRef } from "react";

import { Header } from "./Components/Header";
// import SideMessage from "./Components/SideMessage.jsx";
import { Greeting } from "./Components/HeroSection";
import { Experience } from "./Components/Experience";
import { FeaturedProject } from "./Components/FeaturedProject";
import { ContactSection } from "./Components/ContactSection";
import { PersonalInfo } from "./Components/PersonalInfo";
import { ProjectExhibition } from "./Components/ProjectExhibition";
import { Footer } from "./Components/Footer";
import "animate.css";
import { useEffect } from "react";
import { GeneralContext } from "./Contexts/Context";
import AOS from 'aos';
import 'aos/dist/aos.css';  


export default function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const greetingTextRef = useRef(null);

  useEffect(() => {
 const greetingTextCurrent = greetingTextRef.current;

    const handleScrollAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is in view!");
          entry.target.classList.add(
            "animate__animated",
            "animate__backInDown"
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5, 
    });

    if (greetingTextCurrent) {
      observer.observe(greetingTextCurrent);
    }

    return () => {
      if (greetingTextCurrent) {
        observer.unobserve(greetingTextCurrent);
      }
    };
  }, []);
  return (
    <>
      <GeneralContext.Provider value={{ greetingTextRef }}>
        <Header />
        <Greeting />
        <PersonalInfo />
        <Experience />
        <div className="wrapper">
          <span className="bigA">A</span>
          <span className="sideBigA">A</span>

          <span className="firstLeftSide2BigA">A</span>
          <span className="lastLeftSide2BigA">A</span>
          <span className="rightSideBigA">A</span>
          <span className="firstRightSideBigA">A</span>
          <span className="upSmallA">A</span>
          <span className="upFirstLeftSmallA"></span>
          <span className="upSecondLeftSmallA"></span>
        </div>

        <FeaturedProject />
        <ProjectExhibition />
        <ContactSection />
        <Footer />
      </GeneralContext.Provider>
    </>
  );
}

