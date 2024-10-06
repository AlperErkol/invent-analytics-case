import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoData from "./no-data";

describe("NoData Component", () => {
  test("renders the provided message", () => {
    const message = "No data available";
    render(<NoData message={message} />);
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});
