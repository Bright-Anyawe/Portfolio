import { useRef } from "react";

export const Header = () => {
const menuIconRef = useRef(null)


window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").style.top = "35px";
    document.querySelector("#toggleMenuIcon").style.top = "30px";
  } else {
    document.querySelector("nav").style.top = "-80px";
    document.querySelector("#toggleMenuIcon").style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
};

  return (
    <>
      <header>
        <div className="portfolioLogo mobileScreenPortfolioLogo">
          <p className="logoText">A</p>
        </div>

        <div id="toggleMenuIcon" className="toggleMenuOnDesktop" ></div>

        <div
          id="firstSideBarContainer"
          className="firstSideBarContainerOnDesktop"
        >
          <ul className="sideBar">
            <li className="navlinks">
              <a href="#">HOME</a>
            </li>
            <li className="navlinks">
              <a href="#personalInfo">ABOUT</a>
            </li>
            <li className="navlinks">
              <a href="#challenge">PROJECT</a>
            </li>
            <li className="navlinks">
              <a href="#myContact">CONTACT ME</a>
            </li>
          </ul>
        </div>

        <nav id="navList">
          <ul className="sidebar">
            <li className="navlinks">
              <a href="#">HOME</a>
            </li>
            <li className="navlinks">
              <a href="#personalInfo">ABOUT</a>
            </li>
            <li className="navlinks">
              <a href="#challenge">PROJECT</a>
            </li>
            <li className="navlinks">
              <a href="#myContact">CONTACT ME</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
