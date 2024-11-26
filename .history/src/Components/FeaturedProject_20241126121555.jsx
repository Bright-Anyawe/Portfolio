export const FeaturedProject = () => {
  return (
    <>
      <section
        className="featuredProject"
        id="challenge"
        data-testid="featuredProject"
      >
        <div className="captionContainer">
          <div className="featuredProjectHeadcaption">
            <h3>FEATURED WORK</h3>
            <p className="briefHeadNote">
              A curated collection of my most exceptional projects
            </p>
          </div>
        </div>
======
        {/* 
        <div className="subFeaturedProjectContainer">
          <img
            className="showDesktop mobileResponsive"
            src="/Todo list 2.jpg"
            alt="Image for desktop layout"
          />
          <div className="aboutFeaturedWorkContainer">
            <p className="aboutFeaturedWork">
              A real-world{" "}
              <span className="featuredWorkGoalGetter">Goal Getter</span> that
              helps users track daily tasks, edit, delete, and create different
              projects with their respective to-dos.
            </p>
          </div>

          <div className="buttons">
            <button>
              <a href="https://todo-app-react-plum-eight.vercel.app/">
                Live Website
              </a>
            </button>
            <button>
              <a href="https://github.com/Bright-Anyawe/Todo_app_react">
                View on GitHub
              </a>
            </button>
          </div>
        </div> */}
>>>>>>> 2d91b646cf0c657d594c5734fcf456534b227cdd

        <div className="subFeaturedProjectContainer">
          <div className="featuredProjectTitleContainer">
            <h3 className="featuredProjectTitle">Todo App</h3>
          </div>
          <div className="firstProjectBody">
            <div className="firstProject mobileScreen desktopScreen">
              <img
                className="showDesktop mobileResponsive"
                src="/Todo list 2.jpg"
                alt="Image for desktop layout"
              />{" "}
            </div>

            <div className="aboutFeaturedWorkContainer">
              <p className="aboutFeaturedWork">
                A real-world{" "}
                <span className="featuredWorkGoalGetter">Goal Getter</span> that
                helps users track daily tasks, edit, delete, and create
                different projects with their respective to-dos.
              </p>
              <div className="buttons">
                <button>
                  <a href="https://todo-app-react-plum-eight.vercel.app/">
                    Live Website
                  </a>
                </button>
                <button>
                  <a href="https://github.com/Bright-Anyawe/Todo_app_react">
                    View on GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
