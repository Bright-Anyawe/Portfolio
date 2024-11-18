import { useRef, useEffect } from "react";

export const Header = () => {
  const menuIconRef = useRef(null);
  let prevScrollPos = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        if (menuIconRef.current) {
          menuIconRef.current.style.top = "30px";
        }
      } else {
        // Scrolling down
        if (menuIconRef.current) {
          menuIconRef.current.style.top = "-80px";
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []); 
  

  const toggleMenu = () => {
    menuIconRef.current.classList.toggle("active");
  };

  return (
    <>
      <header>
        <div className="portfolioLogo mobileScreenPortfolioLogo">
          <p className="logoText">A</p>
        </div>

        <div
          id="toggleMenuIcon"
          className="toggleMenuOnDesktop"
          ref={menuIconRef}
        ></div>

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
