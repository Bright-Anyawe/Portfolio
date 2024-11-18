export const ContactSection = () => {
  return (
    <>
      <section
        className="contactContainer contactContainerMobile"
        id="myContact"
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
          <
