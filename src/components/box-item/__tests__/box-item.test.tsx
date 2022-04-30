import {describe, expect} from "vitest";
import App from "app";
import {fireEvent, render, screen} from "@testing-library/react";

describe("BoxItem", () => {
  it("should render 9 box item", () => {
      render(<App />);
      expect(screen.getAllByTestId("box-item").length).toBe(9);
  });

  it("should toggle audio when click on the box", async () => {
      render(<App />);
      const audio = screen.getAllByTestId("audio")[0] as HTMLAudioElement;
      expect(audio).not.toBeNull();
      const boxItem = screen.getAllByTestId("box-item")[0];
      // Click on the box to start music
      fireEvent.click(boxItem);
      Object.defineProperty(audio, "paused", {
          value: false,
          writable: true,
      });
      expect(audio.paused).toBe(false);
      // Click on the box to stop music
      fireEvent.click(boxItem);
      Object.defineProperty(audio, "paused", {
          value: true,
          writable: true,
      });
      expect(audio.paused).toBe(true);
  })
});