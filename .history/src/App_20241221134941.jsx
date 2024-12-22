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
import AOS from "aos";
import "aos/dist/aos.css";

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

        

        <div className="personalInfoDesignOne">
          <span className="firstMiddleDesignEl">A</span>
          {/* <span className="firstLeftDesignOneEl">A</span> */}
          <span className="secondLeftDesignOneEl">A</span>
          <span className="thirdLeftDesignOneEl">A</span>
          <span className="fourthLeftDesignOneEl">A</span>
          <span className="fifthLeftDesignOneEl">A</span>
          <span className="sixthLeftDesignOneEl">A</span>
          <span className="sevenLeftDesignOneEl">A</span>
          <span className="firstRightDesignOneEl">A</span>
          <span className="secondRightDesignOneEl">A</span>
          <span className="thirdRightDesignOneEl">A</span>
          <span className="fourthRightDesignOneEl">A</span>
          <span className="fifthRightDesignOneEl">A</span>
          <span className="secondMiddleDesignTwoEl">A</span>
          <span className="firstLeftDesignTwoEl">A</span>
          <span className="secondLeftDesignTwoEl">A</span>
          <span className="thirdLeftDesignTwoEl">A</span>
          <span className="fourthLeftDesignTwoEl">A</span>
          <span className="fifthLeftDesignTwoEl">A</span>
          <span className="sixthLeftDesignTwoEl">A</span>
          <span className="firstRightDesignTwoEl">A</span>
          <span className="secondRightDesignTwoEl">A</span>
          <span className="thirdRightDesignTwoEl">A</span>{" "}
          <span className="fourthRightDesignTwoEl">A</span>{" "}
          <span className="fifthRightDesignTwoEl">A</span>{" "}
          <span className="thirdMiddleDesignThreeEl">A</span>
          <span className="firstLeftDesignThreeEl">A</span>
          <span className="secondLeftDesignThreeEl">A</span>
          <span className="thirdLeftDesignThreeEl">A</span>
          <span className="fourthLeftDesignThreeEl">A</span>
          <span className="fifthLeftDesignThreeEl">A</span>
          <span className="sixthLeftDesignThreeEl">A</span>
          {/* <span className="firstRightDesignThreeEl">A</span> */}
          <span className="secondRightDesignThreeEl">A</span>
          <span className="thirdRightDesignThreeEl">A</span>
          <span className="fourthRightDesignThreeEl">A</span>
          <span className="fifthRightDesignThreeEl">A</span>
          <span className="sixthRightDesignThreeEl">A</span>
          <span className="thirdMiddleDesignFourthEl">A</span>
          <span className="firstLeftDesignFourthEl">A</span>
          <span className="secondLeftDesignFourthEl">A</span>
          <span className="thirdLeftDesignFourthEl">A</span>
          <span className="fourthLeftDesignFourthEl">A</span>
          <span className="fifthLeftDesignFourthEl">A</span>
          <span className="sixthLeftDesignFourthEl">A</span>
          <span className="sevenLeftDesignFourthEl">A</span>
          <span className="firstRightDesignFourthEl">A</span>
          <span className="secondRightDesignFourthEl">A</span>
          <span className="thirdRightDesignFourthEl">A</span>
          <span className="fourthRightDesignFourthEl">A</span>
          <span className="fifthRightDesignFourthEl">A</span>
          <span className="sixthRightDesignFourthEl">A</span>
          <span className="fourthMiddleDesignFifthEl">A</span>
          <span className="firstLeftDesignFifthEl">A</span>
          <span className="secondLeftDesignFifthEl">A</span>
          <span className="thirdLeftDesignFifthEl">A</span>
          <span className="fourthLeftDesignFifthEl">A</span>
          <span className="fifthLeftDesignFifthEl">A</span>{" "}
          <span className="sixthLeftDesignFifthEl">A</span>{" "}
          <span className="sevenLeftDesignFifthEl">A</span>{" "}
          <span className="eightLeftDesignFifthEl">A</span>{" "}
          <span className="firstRightDesignFifthEl">A</span>
          <span className="secondRightDesignFifthEl">A</span>
          <span className="thirdRightDesignFifthEl">A</span>
          <span className="fourthRightDesignFifthEl">A</span>
          <span className="fifthRightDesignFifthEl">A</span>
          {/* <span className="sixthRightDesignFifthEl">A</span> */}
          <span className="sevenRightDesignFifthEl">A</span>
        </div>

        <div className="MobileDesignContainer">


            <span className="zeroMobileMiddleDesign">A</span>
            <span className="zeroMobileFirstLeftDesign">A</span>
            <span className="zeroMobileSecondLeftDesign">A</span>
            <span className="zeroMobileThirdLeftDesign">A</span>
            <span className="zeroMobileFourthLeftDesign">A</span>
            <span className="zeroMobileFirstRightDesign">A</span>
            <span className="zeroMobileSecondRightDesign">A</span>
            <span className="zeroMobileThirdRightDesign">A</span>
            <span className="zeroMobileFourthRightDesign">A</span>


          <span className="firstMobileMiddleDesign">A</span>
          <span className="firstMobileFirstLeftDesign">A</span>
          <span className="firstMobileSecondLeftDesign">A</span>
          <span className="firstMobileThirdLeftDesign">A</span>
          <span className="firstMobileFourthLeftDesign">A</span>

          <span className="firstMobileFirstRightDesign">A</span>
          <span className="firstMobileSecondRightDesign">A</span>
          <span className="firstMobileThirdRightDesign">A</span>
          <span className="firstMobileFourthRightDesign">A</span>

          <span className="secondMobileMiddleDesign">A</span>
          <span className="secondMobileFirstLeftDesign">A</span>
          <span className="secondMobileSecondLeftDesign">A</span>
          <span className="secondMobileThirdLeftDesign">A</span>
          <span className="secondMobileFourthLeftDesign">A</span>

          <span className="secondMobileFirstRightDesign">A</span>
          <span className="secondMobileSecondRightDesign">A</span>
          <span className="secondMobileThirdRightDesign">A</span>
          <span className="secondMobileFourthRightDesign">A</span>

          <div className="MobileDesignContainer">
            {/* Existing spans */}
            <span className="thirdMobileMiddleDesign">A</span>
            <span className="thirdMobileFirstLeftDesign">A</span>
            <span className="thirdMobileSecondLeftDesign">A</span>
            <span className="thirdMobileThirdLeftDesign">A</span>
            <span className="thirdMobileFourthLeftDesign">A</span>

            <span className="thirdMobileFirstRightDesign">A</span>
            <span className="thirdMobileSecondRightDesign">A</span>
            <span className="thirdMobileThirdRightDesign">A</span>
            <span className="thirdMobileFourthRightDesign">A</span>

            <span className="fourthMobileMiddleDesign">A</span>
            <span className="fourthMobileFirstLeftDesign">A</span>
            <span className="fourthMobileSecondLeftDesign">A</span>
            <span className="fourthMobileThirdLeftDesign">A</span>
            <span className="fourthMobileFourthLeftDesign">A</span>

            <span className="fourthMobileFirstRightDesign">A</span>
            <span className="fourthMobileSecondRightDesign">A</span>
            <span className="fourthMobileThirdRightDesign">A</span>
            <span className="fourthMobileFourthRightDesign">A</span>

            <span className="fifthMobileMiddleDesign">A</span>
            <span className="fifthMobileFirstLeftDesign">A</span>
            <span className="fifthMobileSecondLeftDesign">A</span>
            <span className="fifthMobileThirdLeftDesign">A</span>
            <span className="fifthMobileFourthLeftDesign">A</span>
            <span className="fifthMobileFirstRightDesign">A</span>
            <span className="fifthMobileSecondRightDesign">A</span>
            <span className="fifthMobileThirdRightDesign">A</span>
            <span className="fifthMobileFourthRightDesign">A</span>

            <span className="sixthMobileMiddleDesign">A</span>
            <span className="sixthMobileFirstLeftDesign">A</span>
            <span className="sixthMobileSecondLeftDesign">A</span>
            <span className="sixthMobileThirdLeftDesign">A</span>
            <span className="sixthMobileFourthLeftDesign">A</span>
            <span className="sixthMobileFirstRightDesign">A</span>
            <span className="sixthMobileSecondRightDesign">A</span>
            <span className="sixthMobileThirdRightDesign">A</span>
            <span className="sixthMobileFourthRightDesign">A</span>

            <span className="seventhMobileMiddleDesign">A</span>
            <span className="seventhMobileFirstLeftDesign">A</span>
            <span className="seventhMobileSecondLeftDesign">A</span>
            <span className="seventhMobileThirdLeftDesign">A</span>
            <span className="seventhMobileFourthLeftDesign">A</span>
            <span className="seventhMobileFirstRightDesign">A</span>
            <span className="seventhMobileSecondRightDesign">A</span>
            <span className="seventhMobileThirdRightDesign">A</span>
            <span className="seventhMobileFourthRightDesign">A</span>

            <span className="eighthMobileMiddleDesign">A</span>
            <span className="eighthMobileFirstLeftDesign">A</span>
            <span className="eighthMobileSecondLeftDesign">A</span>
            <span className="eighthMobileThirdLeftDesign">A</span>
            <span className="eighthMobileFourthLeftDesign">A</span>
            <span className="eighthMobileFirstRightDesign">A</span>
            <span className="eighthMobileSecondRightDesign">A</span>
            <span className="eighthMobileThirdRightDesign">A</span>
            <span className="eighthMobileFourthRightDesign">A</span>

          </div>
        </div>

        <FeaturedProject />
        <ProjectExhibition />
        <ContactSection />
        <Footer />
      </GeneralContext.Provider>
    </>
  );
}
