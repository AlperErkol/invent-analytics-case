import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ErrorPage from "./error-page";

jest.mock("react-router-dom", () => ({
  useRouteError: jest.fn(),
}));

describe("ErrorPage Component", () => {
  test("renders error message correctly when statusText is provided", () => {
    const mockError = { statusText: "Not Found" };

    require("react-router-dom").useRouteError.mockReturnValue(mockError);

    render(<ErrorPage />);

    expect(screen.getByText("Oops!")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
    expect(screen.getByText(mockError.statusText)).toBeInTheDocument();
  });

  test("renders error message correctly when message is provided", () => {
    const mockError = { message: "Network Error" };

    require("react-router-dom").useRouteError.mockReturnValue(mockError);

    render(<ErrorPage />);

    expect(screen.getByText("Oops!")).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
    expect(screen.getByText(mockError.message)).toBeInTheDocument();
  });
});
