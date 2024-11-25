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
        </div>

        <div className="firstProjectContainer">
          <div className="firstProjectTitleContainer">
            <h3 className="firstProjectTitle">E-commerce App</h3>
          </div>
          <div className="firstProjectBody">
            <div className="firstProject mobileScreen desktopScreen">
              <img src="/image copy.png" alt="E-commerce image" />
            </div>

            <div className="firstProjectTextContainer">
              <p className="firstProjectText">
                At <span className="featuredWorkGoalGetter">ShopRyt</span> , we
                believe in offering something for everyone. Whether you’re
                looking to refresh your wardrobe with stylish clothes, upgrade
                your tech with the latest electronics, or add a touch of
                elegance to your look with beautiful jewelry, we’ve got you
                covered.
              </p>

              <div className="buttons">
                <button>
                  <a href="https://6726b683822c5148f1324bec--shopping-online-web-app.netlify.app/">
                    Live Website
                  </a>
                </button>
                <button>
                  <a href="https://github.com/Bright-Anyawe/Shopping_cart">
                    View on Github
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
