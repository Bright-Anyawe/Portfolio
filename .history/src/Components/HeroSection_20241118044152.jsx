const Greeting = () => {
  return (
    <>
      <section class="greetingContainer">
        <div class="greetingTextContainer">
          <p class="hi">
            {" "}
            I <span class="comma">'</span>m{" "}
          </p>
          <h1 class="namedPerson"> Anyawe Bright</h1>

          <h2>I EMBRACE THE DIGITAL WORLD</h2>
          <p class="briefIntro">
            Looking for someone who is dedicated and love to help people to
            solve problem with his tech skill? You are on the right site.I can
            help you build projects, features, or website. Look through my work
            and see my innovation! if you are interested. I am available for
            hire.
          </p>

          <div class="btnContainer">
            <button class="viewWorkBtn">
              {" "}
              <a href="https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html">
                Check out my work
              </a>{" "}
            </button>

            <button class="ResumeBtn">
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
