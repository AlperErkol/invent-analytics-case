import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./home-page";

describe("HomePage Component", () => {
  test("renders PageTitle with correct title", () => {
    const expectedTitle =
      "The Open Movie Database - Invent Analytics Frontend Case";

    render(<HomePage />);
    const titleElement = screen.getByText(expectedTitle);
    expect(titleElement).toBeInTheDocument();
  });
});
