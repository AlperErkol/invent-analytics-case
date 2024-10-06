import { render, screen } from "@testing-library/react";
import DataError from "./data-error";

it("renders DataError with correct message", () => {
  render(<DataError />);
  const errorMessage = screen.getByText("An error occured!");
  expect(errorMessage).toBeInTheDocument();
});
