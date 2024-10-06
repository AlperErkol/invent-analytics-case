import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./navbar";

describe("Header Component", () => {
  test("renders logo with correct alt text", () => {
    render(<Header />);
    const logoImage = screen.getByAltText(
      "Invent Analytics Logo displaying on Invent Analytics Frontend Case application."
    );
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      "src",
      "https://www.inventanalytics.com/Content/images/logo.svg"
    );
  });

  test("renders Home Page link", () => {
    render(<Header />);
    const homeLink = screen.getByText("Home Page");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest("a")).toHaveAttribute("href", "/");
  });

  test("renders All Contents link", () => {
    render(<Header />);
    const contentsLink = screen.getByText("All Contents");
    expect(contentsLink).toBeInTheDocument();
    expect(contentsLink.closest("a")).toHaveAttribute(
      "href",
      "/content?page=1"
    );
  });
});
