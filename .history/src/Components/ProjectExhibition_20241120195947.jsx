import { useState, useRef } from "react";

export const ProjectExhibition = () => {
  const [projectVisible, setProjectVisible] = useState(false);
// const openRef = useRef(null)
  const handleOpenProject = () => {
const toggle = !projectVisible
    setProjectVisible(toggle);
  }

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
          </button>
        </div>
        {projectVisible ? (
          <div id="projectMainContainer">
            <div className="projectContainer">
              <div className="firstProjectContainer">
                <div className="firstProjectTitleContainer">
                  <h3 className="firstProjectTitle">E-commerce App</h3>
                </div>
                <div className="firstProjectBody">
                  <div className="firstProject mobileScreen desktopScreen">
                    <img
                      src="asset/image/Dashboard_mobile.jpg"
                      alt="Dashboard mobile image"
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
                      src="asset/image/Dashboard_mobile.jpg"
                      alt="Dashboard mobile image"
                    />
                  </div>

                  <div className="secondProjectTextContainer">
                    <p className="secondProjectText">
                      A real-world Cv generator that help user to {" "}
                      <span className="featuredWorkGoalGetter">
                        Goal Getter
                      </span>{" "}
                      that helps users track daily tasks, edit, delete, and
                      create different projects with their respective to-dos.
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
          </div>
        ) : null}

        {/* <div className="projectCarouselContainer">
          <p id="previous">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
          </p>
          <div className="carouselImg">
            <div className="picture-frame"></div>
            <div id="circles">
              <p className="dot first-circle">
                <a href="https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html">
                  L
                </a>
              </p>
              <p className="dot second-circle">
                <a href="https://github.com/Bright-Anyawe/TOP-Admin-Dashboard/tree/responsiveDashboard">
                  A
                </a>
              </p>
              <p className="dot third-circle">
                <a href="https://bright-anyawe.github.io/TOP-Weather-Forecast-Project/">
                  W
                </a>
              </p>
            </div>
          </div>
          <p className="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </p>
        </div> */}
      </section>
    </>
  );
};
