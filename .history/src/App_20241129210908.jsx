import { useRef } from "react";

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
          <span className="bottomSmallA">A</span>
          <span className="bottomFirstLeftSmallA">A</span>
          <span className="bottomSecondLeftSmallA">A</span>
          <span className="bottomFirstRightSmallA">A</span>
          <span className="bottomSecondRightSmallA">A</span>
          <span className="initialBigA">A</span>
          <span className="latterBigA">A</span>
          <span className="firstLeftSideLatterBigA">A</span>
          <span className="secondLeftSideLatterBigA">A</span>

          <span className="firstRightSideLatterBigA">A</span>
          <span className="secondRightSideLatterBigA">A</span>

          <span className="sideBigA">A</span>
          <span className="firstLeftSide2BigA">A</span>
          <span className="lastLeftSide2BigA">A</span>
          <span className="rightSideBigA">A</span>
          <span className="firstRightSideBigA">A</span>
          <span className="upSmallA">A</span>
          <span className="upFirstLeftSmallA">A</span>
          <span className="upSecondLeftSmallA">A</span>
          <span className="upThirdLeftSmallA">A</span>
          <span className="upFirstRightSmallA">A</span>
          <span className="upSecondRightSmallA">A</span>
          <span className="upThirdRightSmallA">A</span>
          <span className="upperMiddleSmallA">A</span>
          <span className="upperFirstLeftSmallA">A</span>
          <span className="upperSecondLeftSmallA">A</span>
          <span className="upperThirdLeftSmallA">A</span>
          <span className="upperFourLeftSmallA">A</span>
          <span className="upperFiveLeftSmallA">A</span>
          <span className="upperFirstRightSmallA">A</span>
          <span className="upperSecondRightSmallA">A</span>
          <span className="upperThirdRightSmallA">A</span>
          <span className="secondUpperMiddleSmallA">A</span>
          <span className="secondUpperFirstLeftSmallA">A</span>
          <span className="secondUpperSecondLeftSmallA">A</span>
          <span className="secondUpperThirdLeftSmallA">A</span>
          <span className="secondUpperFourLeftSmallA">A</span>
          <span className="secondUpperFiveLeftSmallA">A</span>
          <span className="secondUpperFirstRightSmallA">A</span>
          <span className="secondUpperSecondRightSmallA">A</span>
          <span className="thirdUpperMiddleSmallA">A</span>
          <span className="thirdUpperFirstLeftSmallA">A</span>
          <span className="thirdUpperSecondLeftSmallA">A</span>
          <span className="thirdUpperThirdLeftSmallA">A</span>
          <span className="thirdUpperFourLeftSmallA">A</span>
          <span className="thirdUpperFiveLeftSmallA">A</span>
          <span className="thirdUpperSixLeftSmallA">A</span>
          <span className="thirdUpperSevenLeftSmallA">A</span>
          <span className="thirdUpperFirstRightSmallA">A</span>
          <span className="thirdUpperSecondRightSmallA">A</span>
          <span className="thirdUpperThirdRightSmallA">A</span>
          <span className="thirdUpperFourthRightSmallA">A</span>
          <span className="thirdUpperFifthRightSmallA">A</span>
          <span className="thirdUpperSixthRightSmallA">A</span>
          <span className="fourthUpperMiddleSmallA">A</span>
          <span className="fourthUpperFirstLeftSmallA">A</span>
          <span className="fourthUpperSecondLeftSmallA">A</span>
          <span className="fourthUpperThirdLeftSmallA">A</span>
          <span className="fourthUpperFourthLeftSmallA">A</span>
          <span className="fourthUpperFifthLeftSmallA">A</span>
          <span className="fourthUpperSixthLeftSmallA">A</span>
          <span className="fourthUpperSevenLeftSmallA">A</span>
          <span className="fourthUpperEightLeftSmallA">A</span>
          <span className="fourthUpperFirstRightSmallA">A</span>
          <span className="fourthUpperSecondRightSmallA">A</span>
          <span className="fourthUpperThirdRightSmallA">A</span>
          <span className="fourthUpperFourthRightSmallA">A</span>
          <span className="fourthUpperFifthRightSmallA">A</span>
          <span className="fourthUpperSixthRightSmallA">A</span>
          <span className="fourthUpperSixthRightSmallA">A</span>
          <span className="fifthUpperMiddleSmallA">A</span>
          <span className="fifthUpperFirstLeftSmallA">A</span>
          <span className="fifthUpperSecondLeftSmallA">A</span>
          <span className="fifthUpperThirdLeftSmallA">A</span>
          <span className="fifthUpperFourthLeftSmallA">A</span>
          <span className="fifthUpperFifthLeftSmallA">A</span>
          <span className="fifthUpperSixthLeftSmallA">A</span>
          <span className="fifthUpperFirstRightSmallA">A</span>
          <span className="fifthUpperSecondRightSmallA">A</span>
          <span className="fifthUpperThirdRightSmallA">A</span>
          <span className="fifthUpperFourthRightSmallA">A</span>
          <span className="fifthUpperFifthRightSmallA">A</span>
          <span className="fifthUpperSixthRightSmallA">A</span>
          <span className="sixthUpperMiddleSmallA">A</span>
          <span className="sixthUpperFirstLeftSmallA">A</span>
          <span className="sixthUpperSecondLeftSmallA">A</span>
          <span className="sixthUpperThirdLeftSmallA">A</span>
          <span className="sixthUpperFourthLeftSmallA">A</span>
          <span className="sixthUpperFifthLeftSmallA">A</span>
          <span className="sixthUpperSixthLeftSmallA">A</span>
          <span className="sixthUpperFirstRightSmallA">A</span>
          <span className="sixthUpperSecondRightSmallA">A</span>
          <span className="sixthUpperThirdRightSmallA">A</span>
          <span className="sixthUpperFourthRightSmallA">A</span>
          <span className="sixthUpperFifthRightSmallA">A</span>
          <span className="sixthUpperSixthRightSmallA">A</span>
        </div>

        <div className="personalInfoDesignOne">
          <span className="middleDesignEl">A</span>
          <span className="middleDesignEl">A</span>

        </div>

        <FeaturedProject />
        <ProjectExhibition />
        <ContactSection />
        <Footer />
      </GeneralContext.Provider>
    </>
  );
}

