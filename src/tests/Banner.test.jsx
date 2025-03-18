import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Banner from "../components/Banner";

describe("Banner", () => {
  test("renders the banner with default text", () => {
    render(<Banner />);

    const bannerText = screen.getByTestId("banner-text");
    expect(bannerText).toBeInTheDocument();
  });

  test("updates the banner text when input is changed", () => {
    render(<Banner />);

    const input = screen.getByTestId("banner-input");
    fireEvent.change(input, { target: { value: "New Banner Text" } });

    expect(screen.getByTestId("banner-text")).toHaveTextContent(
      "New Banner Text"
    );
  });

  test("uploads and displays an image", () => {
    render(<Banner />);
    const fileInput = screen.getByLabelText(/Banner Image/i);
    const file = new File(["dummy image"], "banner.jpg", {
      type: "image/jpeg",
    });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(screen.getByTestId("banner-image")).toBeInTheDocument();
  });
});
