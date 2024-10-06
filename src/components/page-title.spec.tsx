import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTitle from "./page-title";

describe("PageTitle Component", () => {
  test("renders the title correctly", () => {
    const testTitle = "Test Page Title";
    render(<PageTitle title={testTitle} />);
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });
});
