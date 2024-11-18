import { useRef, useEffect } from "react";

export const Header = () => {
  const menuIconRef = useRef(null);
  const sideBarRef = useRef(null)
  let prevScrollPos = useRef(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos.current > currentScrollPos) {
        if (menuIconRef.current) {
          menuIconRef.current.style.top = "30px";
        }
      } else {
        if (menuIconRef.current) {
          menuIconRef.current.style.top = "-80px";
        }
      }

      prevScrollPos.current = currentScrollPos;
    };

    // Close sidebar when clicking outside
    const handleClickOutside = (event) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        sideBarRef.current.classList.remove("active");
        menuIconRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  

  const toggleMenu = () => {
    menuIconRef.current.classList.toggle("active");
    sideBarRef.current.classList.toggle("active");
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
          onClick={toggleMenu}
        ></div>

        <div
          ref={sideBarRef}
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
