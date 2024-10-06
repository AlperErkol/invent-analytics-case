import { render, screen } from "@testing-library/react";
import ContentDetailMeta from "./content-detail-meta";

it("renders ContentDetailMeta correctly", () => {
  render(<ContentDetailMeta title="Alper" description="Erkol" />);
  const title = screen.getByText("Alper");
  const description = screen.getByText("Erkol");
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
