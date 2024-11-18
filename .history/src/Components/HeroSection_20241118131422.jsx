import { useContext } from "react";
import Gener


export const Greeting = () => {
  return (
    <>
      <section className="greetingContainer">
        <div className="greetingTextContainer">
          <p className="hi">
            I <span className="comma">&apos;</span>m
          </p>
          <h1 className="namedPerson">Anyawe Bright</h1>

          <h2>I EMBRACE THE DIGITAL WORLD</h2>
          <p className="briefIntro backInUp">
            Looking for someone who is dedicated and loves to help people solve
            problems with their tech skills? You are on the right site. I can
            help you build projects, features, or websites. Look through my work
            and see my innovation! If you are interested, I am available for
            hire.
          </p>

          <div className="btnContainer">
            <button className="viewWorkBtn">
              <a href="https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html">
                Check out my work
              </a>
            </button>

            <button className="ResumeBtn">
              <p>
                <a href="asset/Files/Resume (1).pdf">Resume</a>
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>download</title>
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
