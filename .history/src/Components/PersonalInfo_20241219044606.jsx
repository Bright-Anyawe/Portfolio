export const PersonalInfo = () => {
  return (
    <>
      <section
        className="introductionContainer"
        id="personalInfo"
        data-testid="personalIntro"
      >
        <div className="subTitleContainer">
          <h1 className="subTitle">
            <span> + </span> ABOUT ME <span> + </span>
          </h1>
        </div>

        <div className="introduction mobileScreenIntroEl">
          <figure className="developerImage">
            <img
              id="developerImageOnMobile"
              src="/In person-portfolio-face-edit.jpg"
              alt="developer's image"
            />
          </figure>

          <div className="aboutMeContainer">
            <h2 className="introHeaderText">Introduction</h2>
            <p className="aboutMeEl">
              My name is <span className="identity">Anyawe Bright</span>, and I
              am a passionate front-end developer based in Ghana. I am dedicated
              to continuously improving my skills through study and practical
              application, using code to solve real-world problems—a pursuit
              that brings me immense satisfaction. From a young age, I have been
              fascinated by how modern software and games function.

            </p>

            p

            <p className="aboutGoals">
              I aim to master JavaScript to craft unique, creative, and
              innovative solutions that address real-world challenges through
              code. If you&apos;re intrigued by my portfolio or seeking an
              enthusiastic developer to join your team, I&apos;m open to
              opportunities and ready to contribute.
            </p>

            <div className="langTechToolContainer">
              <h3>Language, Technologies & Tools</h3>

              <div id="techToolsContainer">
                <p className="trackLine"></p>

                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>CSS3</li>
                  <li>HTML</li>
                  <li>Git/GitHub</li>
                  <li>Vitest</li>
                  <li>Figma Design</li>
                  <li>App Test</li>

                  <li>Responsive Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
