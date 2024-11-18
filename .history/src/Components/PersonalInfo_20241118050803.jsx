

export const PersonalInfo = () => {

     return(
     <>
     <section class='introductionContainer ' id="personalInfo">

      <div class='subTitleContainer'>
        <h1 class='subTitle'> <span> + </span> ABOUT ME <span> + </span> </h1>
      </div>



      <div class='introduction mobileScreenIntroEl'>

        <figure class='developerImage '>
          <!-- <span class='figurePlusButtom1'>+</span><span class='figurePlusTop'>+</span> -->
          <img id='developerImageOnMobile' src='asset/image/In person-portfolio-face-edit.jpg' alt="developer's image">
          <!-- <span class='figurePlusButtom'>+</span><span class='figurePlusTop2'>+</span> -->
        </figure>

        <div class='aboutMeContainer'>

          <h2 class='introHeaderText'> Introduction</h2>
          <p class='aboutMeEl'> My name is <span class="identity"> Anyawe Bright </span>, I'm a front-end developer in Ghana.
            I spend most of my time studying in other to improve upon my skills, using codes to solve real world problem
            which is one of things I love to do
          </p>

          <p class='aboutGoals'> My goal is to master javascript in other to deliver, through code, unique, creative and
            innovative solutions to real world problems.
            If my portfolio interests you, or you need an enthusiastic developer on your team, I am available for hire.
          </p>

          <div class='langTechToolContainer'>

            <h3> Language,Technologies & Tools </h3>

            <div id='techToolsContainer'>

              <p class='trackLine'> </p>

              <ul>

                <li> Javascript</li>
                <li> Css</li>
                <li> Html</li>
                <li>Git/ Github</li>
                <li>Figma</li>
                <li>Responsive Development</li>

              </ul>

            </div>
          </div>

        </div>



      </div>
    </section>
    </>
    )
}