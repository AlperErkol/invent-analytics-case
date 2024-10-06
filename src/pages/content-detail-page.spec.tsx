import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useQuery } from "@tanstack/react-query";
import { useIMDbId } from "../hooks/use-imdb-id";
import ContentDetailPage from "./content-detail-page";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("../hooks/use-imdb-id", () => ({
  useIMDbId: jest.fn(),
}));

jest.mock("../api/omdb", () => ({
  getContentById: jest.fn(),
}));

describe("ContentDetailPage Component", () => {
  beforeEach(() => {
    (useIMDbId as jest.Mock).mockReturnValue("tt1234567");
  });

  it("renders loading state initially", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: true,
      isError: false,
      data: null,
    });

    render(<ContentDetailPage />);

    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
  });

  it("renders error state when API call fails", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: false,
      isError: true,
      data: null,
    });

    render(<ContentDetailPage />);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("renders no data state when API returns false response", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: false,
      isError: false,
      data: {
        Response: "False",
        Error: "Movie not found!",
      },
    });

    render(<ContentDetailPage />);

    expect(await screen.findByText(/movie not found/i)).toBeInTheDocument();
  });

  it("renders content detail with fetched data", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      isPending: false,
      isError: false,
      data: {
        Response: "True",
        Title: "Pokemon: The Movie",
        Ratings: [{ Source: "Internet Movie Database", Value: "7.5/10" }],
        Runtime: "98 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "Kunihiko Yuyama",
        Year: "1998",
        Plot: "A great plot about a Pokémon adventure.",
        Actors: "Veronica Taylor, Eric Stuart, Rachael Lillis",
        Language: "English",
        Writer: "Takeshi Shudo",
        Country: "Japan",
        Poster: "some-url-to-poster",
      },
    });

    render(<ContentDetailPage />);

    expect(await screen.findByText(/pokemon: the movie/i)).toBeInTheDocument();
    expect(await screen.findByText(/98 min/i)).toBeInTheDocument();
    expect(screen.getByText(/1998/i)).toBeInTheDocument();
    expect(screen.getByText(/Japan/i)).toBeInTheDocument();
    const genres = await screen.findAllByRole("img", { hidden: true });
    expect(genres.length).toBeGreaterThan(0);
  });
});
