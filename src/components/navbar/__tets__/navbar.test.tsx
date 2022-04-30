import {describe, expect} from "vitest";
import {screen, render} from "@testing-library/react";
import App from "../../../app";

describe("Navbar", () => {
  it("should render", () => {
      render(<App/>);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});