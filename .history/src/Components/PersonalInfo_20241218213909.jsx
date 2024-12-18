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
              My name is , My
              name is , and I am a passionate front-end developer
              based in Ghana. I am dedicated to continuously improving my skills
              through study and practical application, using code to solve
              real-world problems—a pursuit that brings me immense satisfaction.
              From a young age, I have been fascinated by how modern software
              and games function. This curiosity drove me to ask questions,
              conduct research, and leverage available resources, ultimately
              leading me to pursue a career in web development. I have worked on
              various projects, including a Todo List app, an E-commerce
              website, and a CV Builder application. Each project has honed my
              technical abilities and strengthened my commitment to building
              innovative, user-friendly solutions. I am eager to contribute to
              impactful development projects and grow within the industry.
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
