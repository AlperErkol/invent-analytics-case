import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extended assertions
import Loading from "./loading";

describe("Loading Component", () => {
  it("renders LoaderCircle with correct class", () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass("spinner");
  });
});
