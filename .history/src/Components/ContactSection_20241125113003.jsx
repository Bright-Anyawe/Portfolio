export const ContactSection = () => {
  return (
    <>
      <section
        className="contactContainer contactContainerMobile"
        id="myContact"
        data-t
      >
        <div className="contactCaption contactHeadCaptionMobile">
          <h2>CONTACT ME</h2>
          <p className="contactPEl">
            You might want to develop a website, application or discuss anything
            related. Take a break to leave a message below.
          </p>
        </div>
        <form
          className="formEl mobileFormContainer"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="ec323071-c9a1-48e4-9bba-87c32ecc2b27"
          />
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            name="Name"
            className="mobileNameInputEl"
            id="name"
            placeholder="Name"
          />
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="Email"
            className="mobileEmailInputEl"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="messageMe"> Message</label>
          <textarea
            name="Message"
            className="mobileTextAreaInputEl"
            id="messageMe"
            placeholder="Message"
          ></textarea>
          <div className="sendBtnContainer mobileSendBtnContainer">
            <button type="submit" className="submit mobileSubmitInputEl">
              <p>Send</p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>send-outline</title>
                  <path d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z" />
                </svg>
              </p>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
