import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Rating from "./rating";
describe("Rating Component", () => {
  test("renders Source and Value correctly", () => {
    const testRating = {
      Source: "IMDb",
      Value: "8.5/10",
    };

    render(<Rating rating={testRating} />);

    const sourceElement = screen.getByText(testRating.Source);
    expect(sourceElement).toBeInTheDocument();

    const valueElement = screen.getByText(testRating.Value);
    expect(valueElement).toBeInTheDocument();
  });
});
