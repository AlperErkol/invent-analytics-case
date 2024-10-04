import { render, screen } from "@testing-library/react";
import HomePage from "./pages/home-page";

test("renders learn react link", () => {
  render(<HomePage />);
  const linkElement = screen.getByText("home-page");
  expect(linkElement).toBeInTheDocument();
});
