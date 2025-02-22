export const PersonalInfo = () => {
  return (
    <>
      <section className="introductionContainer" id="personalInfo">
        <div className="subTitleContainer">
          <h1 className="subTitle">
            <span> + </span> ABOUT ME <span> + </span>
          </h1>
        </div>

        <div className="introduction mobileScreenIntroEl">
          <figure className="developerImage">
            {/* <span className="figurePlusButtom1">+</span><span className="figurePlusTop">+</span> */}
            <img
              id="developerImageOnMobile"
              src="asset/image/In person-portfolio-face-edit.jpg"
              alt="developer's image"
            />
            {/* <span className="figurePlusButtom">+</span><span className="figurePlusTop2">+</span> */}
          </figure>

          <div className="aboutMeContainer">
            <h2 className="introHeaderText">Introduction</h2>
            <p className="aboutMeEl">
              My name is <span className="identity">Anyawe Bright</span>,
              I&apos;m a front-end developer in Ghana. I spend most of my time
              studying in order to improve upon my skills, using code to solve
              real-world problems, which is one of the things I love to do.
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
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>Git/GitHub</li>
                  <li>Figma</li>
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
