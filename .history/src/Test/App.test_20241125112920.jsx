import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { GeneralContext } from "../Contexts/Context";

globalThis.IntersectionObserver = class {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("App", () => {
  it("should render the header contents", () => {
    render(
        <GeneralContext.Provider
        >   
            <App />
        </GeneralContext.Provider>
    );
    const headerContainer = screen.getByTestId("header");

    expect(headerContainer).toBeInTheDocument();
  });

   it("should render the hero section of the page", () => {
     render(
       <GeneralContext.Provider>
         <App />
       </GeneralContext.Provider>
     );
     const heroSection = screen.getByTestId("heroSection");

     expect(heroSection).toBeInTheDocument();
   });

   it("should render the personal introduction section of the page", () => {
     render(
       <GeneralContext.Provider>
         <App />
       </GeneralContext.Provider>
     );
     const personalIntro = screen.getByTestId("personalIntro");

     expect(personalIntro).toBeInTheDocument();
   });

   it("should render the experience section of the page", () => {
     render(
       <GeneralContext.Provider>
         <App />
       </GeneralContext.Provider>
     );
     const experienceSection = screen.getByTestId("experienceSection");

     expect(experienceSection).toBeInTheDocument();
   });

  it("should render the featured project section of the page", () => {
    render(
      <GeneralContext.Provider>
        <App />
      </GeneralContext.Provider>
    );
    const featuredProject = screen.getByTestId("featuredProject");

    expect(featuredProject).toBeInTheDocument();
  });

  it("should render the featured project section of the page", () => {
    render(
      <GeneralContext.Provider>
        <App />
      </GeneralContext.Provider>
    );
    const featuredProject = screen.getByTestId("featuredProject");

    expect(featuredProject).toBeInTheDocument();
  });


  it("should render the other project section of the page", () => {
    render(
      <GeneralContext.Provider>
        <App />
      </GeneralContext.Provider>
    );
    const featuredProject = screen.getByTestId("otherProjectSection");

    expect(featuredProject).toBeInTheDocument();
  });


});
