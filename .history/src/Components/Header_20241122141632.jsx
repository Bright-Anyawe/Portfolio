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


  const closeSidebar = () => {
    sideBarRef.current.classList.remove("active");
    menuIconRef.current.classList.remove("active");
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
          <ul className="sideBar" onClick={closeSidebar}>
            <li className="navlinks">
              <svg
                className="homeSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title></title>
                <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
              </svg>
              <a href="#">HOME</a>
            </li>
            <li className="navlinks">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title></title>
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
              </svg>
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
