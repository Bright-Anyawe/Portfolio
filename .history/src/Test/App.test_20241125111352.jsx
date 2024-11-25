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
     const heroCo = screen.getByTestId("header");

     expect(headerContainer).toBeInTheDocument();
   });


});
