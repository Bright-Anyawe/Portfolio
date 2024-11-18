import { useRef } from "react";

export const Footer = () => {
const themeRef = useRef(null)

const toggleBackgroundColor = () => {
     themeRef.current.classList.add("active")
}

  return (
    <>
      <footer>
        <section className="socialMediaElContainer">
          <div className="subMediaContainer">
            <div className="socialMediaEl">
              <div className="firstHLine">
                <hr />
              </div>
              <ul className="socialMediaSvgContainer mobileSocialMediaSvgContainer">
                <li className="tweetLogoContainer mobileTweetLogoContainer">
                  <p className="twitterSvgContainer">
                    <a href="https://x.com/BAnyawe78129">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>twitter</title>
                        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                      </svg>
                    </a>
                  </p>
                </li>
                <li className="githublogoContainer mobileGithublogoContainer">
                  <p>
                    <a href="https://github.com/Bright-Anyawe">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>github</title>
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                    </a>
                  </p>
                </li>
                <li className="siteLogo">
                  <a href="">
                    <p className="logoText">A</p>
                  </a>
                </li>
                <li className="linkedInSvgContainer">
                  <a href="https://www.linkedin.com/in/bright-anyawe-772b46324/">
                    <svg viewBox="0 0 128 128">
                      <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" />
                    </svg>
                  </a>
                </li>
                <li className="gmailLogoContainer mobileGmailLogoContainer">
                  <p>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>gmail</title>
                        <path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                      </svg>
                    </a>
                  </p>
                </li>
              </ul>
              <div className="secondHLine">
                <hr />
              </div>
            </div>
          </div>
          <div className="accessibiltyContainer">
            <div id="toggleThemeModeContainer" ref={themeRef}>
              <p className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>moon-waxing-crescent</title>
                  <path d="M2,12A10,10 0 0,1 12,2C12.34,2 12.67,2.03 13,2.08C11.24,3.41 10,5.58 10,8A8,8 0 0,0 18,16C20.42,16 22.59,14.76 23.92,13C23.97,13.33 24,13.66 24,14A10,10 0 0,1 14,24C7.37,24 2,18.63 2,12Z" />
                </svg>
              </p>
            </div>
          </div>
        </section>
        <section className="footerNavContainer">
          <ul className="footerNav">
            <li className="footerNavList">
              <a href="">Accessibility</a>
            </li>
            <li className="footerNavList">
              <a href="">Terms & Conditions</a>
            </li>
            <li className="footerNavList">
              <a href="">Privacy</a>
            </li>
            <li className="footerNavList">
              <a href="">Bright Anyawe @2024</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};
