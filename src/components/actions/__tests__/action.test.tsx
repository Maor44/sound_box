import {describe, expect} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "app";

describe("Action", () => {
    it("should render", () => {
        render(<App/>);
        const musicToggle = screen.getByRole("checkbox", {name: /music on/i})
        expect(musicToggle).toBeInTheDocument();
        expect(musicToggle).not.toBeChecked();
        fireEvent.click(musicToggle);
        expect(musicToggle).toBeChecked();
    });
});