import { useState, useRef } from "react";
import "./styles.css"; // Ensure the CSS transitions are included here.

export const ProjectExhibition = () => {
  const [projectVisible, setProjectVisible] = useState(false);
  const downArrowRef = useRef(null);

  const handleOpenProject = () => {
    const toggle = !projectVisible;
    setProjectVisible(toggle);

    downArrowRef.current.style.transform = toggle
      ? "rotate(180deg)"
      : "rotate(0deg)";
  };

  return (
    <section className="otherProjectsContainer">
      <div className="projectHeaderContainer">
        <div className="projectHeader">
          <h2>More Projects</h2>
          <p>A curated collection of my most exceptional work</p>
        </div>
      </div>

      <div className="moreProjectBtnContainer">
        <button className="moreProjectBtn" onClick={handleOpenProject}>
          Click Here!
          <svg
            className="downArrow"
            ref={downArrowRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              fill: "white",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <title>chevron-down</title>
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </button>
      </div>

      <div
        id="projectMainContainer"
        className={`projectContainer ${projectVisible ? "visible" : ""}`}
      >
        {projectVisible && (
          <div className="projectContainerContent">
            <div className="firstProjectContainer">
              {/* First Project Details */}
            </div>
            <div className="secondProjectContainer">
              {/* Second Project Details */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
