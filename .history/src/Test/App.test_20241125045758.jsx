import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { GeneralContext } from "../Contexts/Context";



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

});
