export const Experience = () => {
  return (
    <>
      <section className="experienceEl">
        <div className="experienceDescriptionContainer">
          <h3>
            My <span>experience</span> as a developer
          </h3>

          <div className="experienceDescription">
            A little bit about my development as a developer: I am self-taught,
            but the Odin project curriculum has been a huge resource in helping
            me advance through my journey as a web developer with key experience
            like website deployment and working with APIs.
          </div>
        </div>
      </section>

      <section className="courseContainer">
        <div className="courseInfo">
          <div className="courseSubTitle">
            <h3>
              The <span>Odin</span> Project
            </h3>
            <p className="subject">Remote front-end developer course</p>
          </div>

          <p className="skill">
            Skills developed from the Odin Project are based on vanilla
            JavaScript, React, CSS3,  and HTML with frameworks like Git and
            GitHub.
          </p>
        </div>

        <figure className="courseImgContainer">
          <img
            className="logo mobileScreenLogo"
            src="/Odin-logo.jpg"
            alt="Odin project logo"
          />
        </figure>
      </section>
    </>
  );
};
