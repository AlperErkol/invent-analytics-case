import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getContent } from "../api/omdb";
import ContentPage from "./content-page";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../api/omdb", () => ({
  getContent: jest.fn(),
}));

describe("ContentPage Component", () => {
  const queryClient = new QueryClient();
  beforeEach(() => {
    (getContent as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: [],
      })
    );
  });

  it("renders the form inputs and search button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ContentPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("search-title")).toBeInTheDocument();
    expect(screen.getByTestId("search-release-year")).toBeInTheDocument();
    expect(screen.getByTestId("search-type")).toBeInTheDocument();
    expect(screen.getByTestId("search-submit-button")).toBeInTheDocument();
  });

  it("calls mutate function on form submission", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ContentPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const searchButton = screen.getByTestId("search-submit-button");
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(getContent).toHaveBeenCalledTimes(2);
    });
  });

  it("updates search params on input change", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ContentPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const titleInput = screen.getByTestId("search-title");
    const releaseYearInput = screen.getByTestId("search-release-year");
    const typeSelect = screen.getByTestId("search-type");

    fireEvent.change(titleInput, { target: { value: "Harry Potter" } });
    fireEvent.change(releaseYearInput, { target: { value: "2001" } });
    fireEvent.change(typeSelect, { target: { value: "series" } });

    expect(titleInput).toHaveValue("Harry Potter");
    expect(releaseYearInput).toHaveValue("2001");
    expect(typeSelect).toHaveValue("series");
  });
});
