import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for better assertions
import DataStatusBoundry from "./data-status-boundry";

jest.mock("./loading", () => () => <div>Loading...</div>);
jest.mock("./data-error", () => () => <div>Error occurred!</div>);
jest.mock("./no-data", () => (props: { message: string }) => (
  <div>No data: {props.message}</div>
));

describe("DataStatusBoundry Component", () => {
  it("renders loading state when isPending is true", () => {
    render(<DataStatusBoundry isPending={true} isError={false} data={null} />);
    const loadingComponent = screen.getByText("Loading...");
    expect(loadingComponent).toBeInTheDocument();
  });

  it("renders error state when isError is true", () => {
    render(<DataStatusBoundry isPending={false} isError={true} data={null} />);
    const errorComponent = screen.getByText("Error occurred!");
    expect(errorComponent).toBeInTheDocument();
  });

  it("renders no data state when isSuccess is true but no data", () => {
    const mockData = { Error: "No data available" };
    render(
      <DataStatusBoundry isPending={false} isError={false} data={mockData} />
    );
    expect(screen.getByText("No data: No data available")).toBeInTheDocument();
  });

  it("does not render anything when none of the conditions are met", () => {
    render(
      <DataStatusBoundry
        isPending={false}
        isError={false}
        data={{ Result: true }}
      />
    );
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Error occurred!")).not.toBeInTheDocument();
    expect(screen.queryByText("No data")).not.toBeInTheDocument();
  });
});
