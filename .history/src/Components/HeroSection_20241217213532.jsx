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
            Searching for someone who is eager to learn, who thinks of new and
            better methods to solve problems, and who enjoys using their tech
            talents to assist others in solving difficulties? You&apos;re in the
            correct place. I can assist you with developing features, projects,
            or websites as well as testing your web application. Explore my work
            to witness my inventiveness! Should you be interested, I am
            available for employment.
          </p>

          <div className="btnContainer">
            <button className="viewWorkBtn">
              <a href="https://ecommerce-frontend-livid-mu.vercel.app/">
                Check out my work
              </a>
            </button>

            <button className="ResumeBtn">
              <p>
                <a
                  download="Anyawe_Bright_Resume.pdf"
                  className="resumeLink"
                  href="/Junior Developer(FrontEnd~+).pdf"
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
