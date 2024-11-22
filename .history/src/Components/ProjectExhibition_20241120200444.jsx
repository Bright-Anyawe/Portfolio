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
          </div>
        ) : null}

       
      </section>
    </>
  );
};
