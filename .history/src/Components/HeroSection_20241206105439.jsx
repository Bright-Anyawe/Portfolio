import { useContext } from "react";
import { GeneralContext } from "../Contexts/Context";


export const Greeting = () => {

     const {greetingTextRef} = useContext(GeneralContext)

  return (
    <>
      <section
        className="greetingContainer"
        ref={greetingTextRef}
        data-aos="fade-up-right"
        data-testid="heroSection"
      >
        <div className="greetingTextContainer">
          <p className="hi">
            I<span className="comma">&apos;</span>m
          </p>
          <h1 className="namedPerson">Anyawe Bright</h1>

          <h2>I EMBRACE THE DIGITAL WORLD</h2>
          <p className="briefIntro backInUp">
           Looking for someone who is willing to learn,
            find new ways and better to solve a problem and loves to help people solve
            problems with their tech skills? You are on the right site. I can
            help you build projects, features, or websites and test your web
            app. Look through my work and see my innovation! If you are
            interested, I am available for hire.
          </p>

          <div className="btnContainer">
            <button className="viewWorkBtn">
              <a href="https://todo-app-react-plum-eight.vercel.app/">
                Check out my work
              </a>
            </button>

            <button className="ResumeBtn">
              <p>
                <a
                  download="Anyawe_Bright_Resume.pdf"
                  className="resumeLink"
                  href="/Resume.original3.pdf"
                >
                  Resume
                </a>
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title></title>
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
