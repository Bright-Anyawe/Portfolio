

export const Header = () => {


     return (
       <>
         <header>
           <div class="portfolioLogo mobileScreenPortfolioLogo">
             <p class="logoText">A</p>
           </div>

           <div id="toggleMenuIcon" class="toggleMenuOnDesktop"></div>

           <div
             id="firstSideBarContainer"
             class="firstSideBarContainerOnDesktop"
           >
             <ul class="sideBar">
               <li class="navlinks">
                 {" "}
                 <a href="#">HOME</a>{" "}
               </li>
               <li class="navlinks">
                 {" "}
                 <a href="#personalInfo">ABOUT</a>{" "}
               </li>
               <li class="navlinks">
                 {" "}
                 <a href="#challenge">PROJECT</a>{" "}
               </li>
               <li class="navlinks">
                 {" "}
                 <a href="#myContact">CONTACT ME</a>{" "}
               </li>
             </ul>
           </div>

           <nav id="navList">
             <ul class="sidebar">
               <li class="navlinks">
                 {" "}
                 <a href="#">HOME</a>{" "}
               </li>
               <li class="navlinks">
                 {" "}
                 <a href="#personalInfo">ABOUT</a>{" "}
               </li>
               <li class="navlinks">
                 {" "}
                 <a href="#challenge">PROJECT</a>{" "}
               </li>
               <li class="navlinks">
                 {" "}
                 <a href="#myContact">CONTACT ME</a>{" "}
               </li>
             </ul>
           </nav>
         </header>
       </>
     );}