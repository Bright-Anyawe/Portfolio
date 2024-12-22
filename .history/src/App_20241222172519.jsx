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

        <div className="largeScreenDesignContainer">
          <span className="zeroLargeScreenMiddleDesign">A</span>

          <span className="zeroLargeScreenFirstLeftDesign">A</span>
          <span className="zeroLargeScreenSecondLeftDesign">A</span>
          <span className="zeroLargeScreenThirdLeftDesign">A</span>
          <span className="zeroLargeScreenFourthLeftDesign">A</span>
          <span className="zeroLargeScreenFifthLeftDesign">A</span>
          <span className="zeroLargeScreenSixthLeftDesign">A</span>
          <span className="zeroLargeScreenSevenLeftDesign">A</span>
          <span className="zeroLargeScreenEightLeftDesign">A</span>

          <span className="zeroLargeScreenFirstRightDesign">A</span>
          <span className="zeroLargeScreenSecondRightDesign">A</span>
          <span className="zeroLargeScreenThirdRightDesign">A</span>
          <span className="zeroLargeScreenFourthRightDesign">A</span>
          <span className="zeroLargeScreenFifthRightDesign">A</span>
          <span className="zeroLargeScreenSixthRightDesign">A</span>
          <span className="zeroLargeScreenSevenRightDesign">A</span>
          <span className="zeroLargeScreenEightRightDesign">A</span>

          <span className="firstLargeScreenMiddleDesign">A</span>

          <span className="firstLargeScreenFirstLeftDesign">A</span>
          <span className="firstLargeScreenSecondLeftDesign">A</span>
          <span className="firstLargeScreenThirdLeftDesign">A</span>
          <span className="firstLargeScreenFourthLeftDesign">A</span>
          <span className="firstLargeScreenFifthLeftDesign">A</span>
          <span className="firstLargeScreenSixthLeftDesign">A</span>
          <span className="firstLargeScreenSevenLeftDesign">A</span>
          <span className="firstLargeScreenEightLeftDesign">A</span>

          <span className="firstLargeScreenFirstRightDesign">A</span>
          <span className="firstLargeScreenSecondRightDesign">A</span>
          <span className="firstLargeScreenThirdRightDesign">A</span>
          <span className="firstLargeScreenFourthRightDesign">A</span>
          <span className="firstLargeScreenFifthRightDesign">A</span>
          <span className="firstLargeScreenSixthRightDesign">A</span>
          <span className="firstLargeScreenSevenRightDesign">A</span>
          <span className="firstLargeScreenEightRightDesign">A</span>

          <span className="secondLargeScreenMiddleDesign">A</span>
          <span className="secondLargeScreenFirstLeftDesign">A</span>
          <span className="secondLargeScreenSecondLeftDesign">A</span>
          <span className="secondLargeScreenThirdLeftDesign">A</span>
          <span className="secondLargeScreenFourthLeftDesign">A</span>

          <span className="secondLargeScreenFirstRightDesign">A</span>
          <span className="secondLargeScreenSecondRightDesign">A</span>
          <span className="secondLargeScreenThirdRightDesign">A</span>
          <span className="secondLargeScreenFourthRightDesign">A</span>
          <span className="secondLargeScreenFifthRightDesign">A</span>
          <span className="secondLargeScreenSixthRightDesign">A</span>
          <span className="secondLargeScreenSevenRightDesign">A</span>
          <span className="secondLargeScreenEightRightDesign">A</span>

          <span className="thirdLargeScreenMiddleDesign">A</span>

          <span className="thirdLargeScreenFirstLeftDesign">A</span>
          <span className="thirdLargeScreenSecondLeftDesign">A</span>
          <span className="thirdLargeScreenThirdLeftDesign">A</span>
          <span className="thirdLargeScreenFourthLeftDesign">A</span>

          <span className="thirdLargeScreenFirstRightDesign">A</span>
          <span className="thirdLargeScreenSecondRightDesign">A</span>
          <span className="thirdLargeScreenThirdRightDesign">A</span>
          <span className="thirdLargeScreenFourthRightDesign">A</span>

          <span className="fourthLargeScreenMiddleDesign">A</span>

          <span className="fourthLargeScreenFirstLeftDesign">A</span>
          <span className="fourthLargeScreenSecondLeftDesign">A</span>
          <span className="fourthLargeScreenThirdLeftDesign">A</span>

          <span className="fourthLargeScreenFirstRightDesign">A</span>
          <span className="fourthLargeScreenSecondRightDesign">A</span>
          <span className="fourthLargeScreenThirdRightDesign">A</span>

          <span className="fifthLargeScreenMiddleDesign">A</span>

          <span className="fifthLargeScreenFirstLeftDesign">A</span>
          <span className="fifthLargeScreenSecondLeftDesign">A</span>

          <span className="fifthLargeScreenFirstRightDesign">A</span>
          <span className="fifthLargeScreenSecondRightDesign">A</span>

          <span className="sixthLargeScreenMiddleDesign">A</span>

          <span className="sixthLargeScreenFirstLeftDesign">A</span>

          <span className="sixthLargeScreenFirstRightDesign">A</span>

          <span className="seventhLargeScreenMiddleDesign">A</span>

          <span className="seventhLargeScreenFirstLeftDesign">A</span>

          <span className="seventhLargeScreenFirstRightDesign">A</span>

          <span className="eighthLargeScreenMiddleDesign">A</span>

          <span className="eighthLargeScreenFirstLeftDesign">A</span>

          <span className="eighthLargeScreenFirstRightDesign">A</span>
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
          <span className="secondMobileFifthLeftDesign">A</span>
          <span className="secondMobileSixthLeftDesign">A</span>
          <span className="secondMobileSevenLeftDesign">A</span>
          <span className="secondMobileEightLeftDesign">A</span>

          <span className="secondMobileFirstRightDesign">A</span>
          <span className="secondMobileSecondRightDesign">A</span>
          <span className="secondMobileThirdRightDesign">A</span>
          <span className="secondMobileFourthRightDesign">A</span>
          <span className="secondMobileFifthRightDesign">A</span>
          <span className="secondMobileSixthRightDesign">A</span>
          <span className="secondMobileSevenRightDesign">A</span>
          <span className="secondMobileEightRightDesign">A</span>
          {/* 
          <span className="thirdLargeScreenMiddleDesign">A</span>
          <span className="thirdLargeScreenFirstLeftDesign">A</span>
          <span className="thirdLargeScreenSecondLeftDesign">A</span>
          <span className="thirdLargeScreenThirdLeftDesign">A</span>
          <span className="thirdLargeScreenFourthLeftDesign">A</span> */}
          <span className="thirdLargeScreenFifthLeftDesign">A</span>
          <span className="thirdLargeScreenSixthLeftDesign">A</span>
          <span className="thirdLargeScreenSevenLeftDesign">A</span>
          <span className="thirdLargeScreenEightLeftDesign">A</span>

          <span className="thirdLargeScreenFirstRightDesign">A</span>
          <span className="thirdLargeScreenSecondRightDesign">A</span>
          <span className="thirdLargeScreenThirdRightDesign">A</span>
          <span className="thirdLargeScreenFourthRightDesign">A</span>
          <span className="thirdLargeScreenFifthRightDesign">A</span>
          <span className="thirdLargeScreenSixthRightDesign">A</span>
          <span className="thirdLargeScreenSevenRightDesign">A</span>
          <span className="thirdLargeScreenEightRightDesign">A</span>

          <span className="fourthLargeScreenMiddleDesign">A</span>
          <span className="fourthLargeScreenFirstLeftDesign">A</span>
          <span className="fourthLargeScreenSecondLeftDesign">A</span>
          <span className="fourthLargeScreenThirdLeftDesign">A</span>
          <span className="fourthLargeScreenFourthLeftDesign">A</span>
          <span className="fourthLargeScreenFifthLeftDesign">A</span>
          <span className="fourthLargeScreenSixthLeftDesign">A</span>
          <span className="fourthLargeScreenSevenLeftDesign">A</span>
          <span className="fourthLargeScreenEightLeftDesign">A</span>

          <span className="fourthLargeScreenFirstRightDesign">A</span>
          <span className="fourthLargeScreenSecondRightDesign">A</span>
          <span className="fourthLargeScreenThirdRightDesign">A</span>
          <span className="fourthLargeScreenFourthRightDesign">A</span>
          <span className="fourthLargeScreenFifthRightDesign">A</span>
          <span className="fourthLargeScreenSixthRightDesign">A</span>
          <span className="fourthLargeScreenSevenRightDesign">A</span>
          <span className="fourthLargeScreenEightRightDesign">A</span>

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
