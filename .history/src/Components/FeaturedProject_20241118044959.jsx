

const FeaturedProject = () => {

     return (
     
          <section class="featuredProject" id="challenge">
                <div class="captionContainer">
                    <div class="featuredProjectHeadcaption">
                        <h3> FEATURED WORK</h3>
                        <p class="briefHeadNote"> A curated collection of my most exceptional project</p>
                    </div>
                </div>
                <div class="subFeaturedProjectContainer">
                    <img class="showDesktop mobileResponsive" src="asset/image/To-do-project-desktop.jpg" alt="Image for desktop layout">
                    <div class="aboutFeaturedWorkContainer">
                        <p class="aboutFeaturedWork">
                            A real world to do list that help users to track daily todos, store
          and allow them to create different project with it relative to-dos
                        </p>
                    </div>
                    <img class="showMobile" src="asset/image/To-do project-mobile.png" alt="Image for mobile layout">
                    <div class="deviceLayoutContainer">
                        <div class="deviceLayout">
                            <figure class="desktopImageContainer"></figure>
                            <figure class="mobileImageContainer"></figure>
                        </div>
                    </div>
                    <div class="buttons">
                        <button>
                            <a href="https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html">Live Website</a>
                        </button>
                        <button>
                            <a href="https://github.com/Bright-Anyawe/TOP-To-Do-List/tree/todoDev">View on Github</a>
                        </button>
                    </div>
                </div>
            </section>
            <section class="otherProjectsContainer">
                <div class="projectHeaderContainer">
                    <div class="projectHeader">
                        <h2> More Projects</h2>
                        <p> A curated collection of my most except</p>
                    </div>
                </div>
                <div id="projectMainContainer">
                    <div class="projectContainer">
                        <div class="firstProjectContainer">
                            <div class="firstProjectTitleContainer">
                                <h3 class="firstprojectTitle">Admin Dashbaord App</h3>
                            </div>
                            <div class="firstProject mobileScreen desktopScreen">
                                <img src="asset/image/Dashboard_mobile.jpg" alt="Dashboard_mobile image">
                            </div>
                            <div class="buttons">
                                <button>
                                    <a href="https://bright-anyawe.github.io/TOP-Admin-Dashboard/">Live Website</a>
                                </button>
                                <button>
                                    <a href="https://github.com/Bright-Anyawe/TOP-Admin-Dashboard/tree/responsiveDashboard">View on Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="secondProjectContainer">
                        <div class="secondProjectTitleContainer">
                            <h3 class="secondprojectTitle">Weather App</h3>
                        </div>
                        <div class="secondProject mobileScreen desktopScreen">
                            <img src="asset/image/WeatherApp.jpg">
                        </div>
                        <div class="buttons">
                            <button>
                                <a href="https://bright-anyawe.github.io/TOP-Weather-Forecast-Project/">Live Website</a>
                            </button>
                            <button>
                                <a href="#">View on Github</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="projectCarouselContainer">
                    <p id="previous">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>chevron-left</title>
                            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                        </svg>
                    </p>
                    <div class="carouselImg">
                        <div class="picture-frame"></div>
                        <div id="circles">
                            <p class="dot first-circle">
                                <a href="https://bright-anyawe.github.io/TOP-To-Do-List/dist/index.html">L</a>
                            </p>
                            <p class="dot second-circle">
                                <a href="https://github.com/Bright-Anyawe/TOP-Admin-Dashboard/tree/responsiveDashboard">A</a>
                            </p>
                            <p class="dot third-circle">
                                <a href="https://bright-anyawe.github.io/TOP-Weather-Forecast-Project/">W</a>
                            </p>
                        </div>
                    </div>
                    <p class="next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>chevron-right</title>
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    </section>
        
     )
}