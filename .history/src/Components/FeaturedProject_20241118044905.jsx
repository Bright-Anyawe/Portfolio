

const FeaturedProject = () => {

     return (
          <>
          <section class='featuredProject' id='challenge'>
      <div class='captionContainer'>

        <div class='featuredProjectHeadcaption'>
          <h3> FEATURED WORK</h3>
          <p class='briefHeadNote'> A curated collection of my most exceptional project</p>
        </div>

      </div>


      <div class='subFeaturedProjectContainer'>
        <img class='showDesktop mobileResponsive' src='asset/image/To-do-project-desktop.jpg'
          alt='Image for desktop layout'>

        <div class='aboutFeaturedWorkContainer'> 
          <p class='aboutFeaturedWork'> A real world to do list that help users to track daily todos, store
          and allow them to create different project with it relative to-dos
        </p>
      </div>

        <img class='showMobile' src='asset/image/To-do project-mobile.png' alt='Image for mobile layout'>

        <div class='deviceLayoutContainer'>

          <div class='deviceLayout'>
            <figure class='desktopImageContainer'>

          </figure>

          <figure class='mobileImageContainer'>

          </figure>
          </div>
        </div>

        <div class='buttons'>
          <button> <a href='https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html'>Live Website</a> </button>
          <button> <a href='https://github.com/Bright-Anyawe/TOP-To-Do-List/tree/todoDev'>View on Github </a> </button>
        </div>

      </div>


    </section>
          </>
     )
}