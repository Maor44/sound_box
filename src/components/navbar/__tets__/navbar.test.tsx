import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "app";

describe("Navbar", () => {
    it("should render", () => {
        render(<App/>);
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
});