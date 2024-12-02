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
              My name is <span className="identity">Anyawe Bright</span>,
              I&apos;m a front-end developer in Ghana. I spend most of my time
              studying in order to improve upon my skills, using code to solve
              real-world problems, which is one of the things I love to do.From
              a young age, I  developed interest to find out in learning how to
              create the software that we use today and how to enter the game
              development industry, which is what I want to do.
            </p>

            <p className="aboutGoals">
              My goal is to master JavaScript in order to deliver, through code,
              unique, creative, and innovative solutions to real-world problems.
              If my portfolio interests you, or you need an enthusiastic
              developer on your team, I am available for hire.
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
