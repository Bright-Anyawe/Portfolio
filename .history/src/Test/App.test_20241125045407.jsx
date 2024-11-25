import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";


describe("App", () => {
  it("should render the header contents container", () => {
    render(
      <MemoryRouter>
        <GeneralContext.Provider
          value={{ toggleSidebar: vi.fn(), isCollapsed: false }}
        >
          <ProjectContext.Provider
            value={{ projects: [], setProjects: vi.fn() }}
          >
            <App />
          </ProjectContext.Provider>
        </GeneralContext.Provider>
      </MemoryRouter>
    );
    const headerContainer = screen.getByTestId("header");

    expect(headerContainer).toBeInTheDocument();
  });

});