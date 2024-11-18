export const FeaturedProject = () => {
  return (
    <>
      <section className="featuredProject" id="challenge">
        <div className="captionContainer">
          <div className="featuredProjectHeadcaption">
            <h3>FEATURED WORK</h3>
            <p className="briefHeadNote">
              A curated collection of my most exceptional projects
            </p>
          </div>
        </div>
        <div className="subFeaturedProjectContainer">
          <img
            className="showDesktop mobileResponsive"
            src="asset/image/To-do-project-desktop.jpg"
            alt="Image for desktop layout"
          />
          <div className="aboutFeaturedWorkContainer">
            <p className="aboutFeaturedWork">
              A real-world to-do list that helps users track daily tasks, store
              them, and create different projects with their respective to-dos.
            </p>
          </div>
          <img
            className="showMobile"
            src="asset/image/To-do project-mobile.png"
            alt="Image for mobile layout"
          />
          <div className="deviceLayoutContainer">
            <div className="deviceLayout">
              <figure className="desktopImageContainer"></figure>
              <figure className="mobileImageContainer"></figure>
            </div>
          </div>
          <div className="buttons">
            <button>
              <a href="https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html">
                Live Website
              </a>
            </button>
            <button>
              <a href="https://github.com/Bright-Anyawe/TOP-To-Do-List/tree/todoDev">
                View on GitHub
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
