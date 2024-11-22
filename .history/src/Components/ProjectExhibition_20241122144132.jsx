import { useState, useRef } from "react";

export const ProjectExhibition = () => {
  const [projectVisible, setProjectVisible] = useState(false);
  const downArrowRef = useRef(null)


  const handleOpenProject = () => {
    const toggle = !projectVisible;
    setProjectVisible(toggle);

    toggle
      ? (downArrowRef.current.style.transform = "rotate(180deg)")
      : (downArrowRef.current.style.transform = "rotate(0deg)");
  };

  return (
    <>
      <section className="otherProjectsContainer">
        <div className="projectHeaderContainer">
          <div className="projectHeader">
            <h2>More Projects</h2>
            <p>A curated collection of my most exceptional work</p>
          </div>
        </div>

        <div className="moreProjectBtnContainer">
          <button className="moreProjectBtn" onClick={handleOpenProject}>
            Click Here!{" "}
            <svg
              className="downArrow"
              ref={downArrowRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ fill: 'white',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>{" "}
          </button>
        </div>
        <div
          id="projectMainContainer"
          style={{ transition: projectVisible ? "10s ease" : null }}
        >
          {projectVisible ? (
            <div className="projectContainer">
              <div className="firstProjectContainer">
                <div className="firstProjectTitleContainer">
                  <h3 className="firstProjectTitle">E-commerce App</h3>
                </div>
                <div className="firstProjectBody">
                  <div className="firstProject mobileScreen desktopScreen">
                    <img
                      src="public/image copy.png"
                      alt="E-commerce image"
                    />
                  </div>

                  <div className="firstProjectTextContainer">
                    <p className="firstProjectText">
                      At <span className="featuredWorkGoalGetter">ShopRyt</span>{" "}
                      , we believe in offering something for everyone. Whether
                      you’re looking to refresh your wardrobe with stylish
                      clothes, upgrade your tech with the latest electronics, or
                      add a touch of elegance to your look with beautiful
                      jewelry, we’ve got you covered.
                    </p>

                    <div className="buttons">
                      <button>
                        <a href="https://bright-anyawe.github.io/TOP-Admin-Dashboard/">
                          Live Website
                        </a>
                      </button>
                      <button>
                        <a href="https://github.com/Bright-Anyawe/TOP-Admin-Dashboard/tree/responsiveDashboard">
                          View on Github
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="secondProjectContainer">
                <div className="secondProjectTitleContainer">
                  <h3 className="secondProjectTitle">Cv Generator</h3>
                </div>
                <div className="secondProjectBody">
                  <div className="secondProject mobileScreen desktopScreen">
                    <img
                      src="/public/cv image.png"
                      alt="Cv image"
                    />
                  </div>

                  <div className="secondProjectTextContainer">
                    <p className="secondProjectText">
                      A real-world{" "}
                      <span className="featuredWorkGoalGetter">
                        Cv generator
                      </span>{" "}
                      that help user to build their cv for their professional
                      work. Thanks to the cv app that provide users feature to
                      download the cv after filling the form{" "}
                    </p>

                    <div className="buttons">
                      <button>
                        <a href="https://bright-anyawe.github.io/TOP-Admin-Dashboard/">
                          Live Website
                        </a>
                      </button>
                      <button>
                        <a href="https://github.com/Bright-Anyawe/TOP-Admin-Dashboard/tree/responsiveDashboard">
                          View on Github
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};
