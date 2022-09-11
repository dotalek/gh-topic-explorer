import { render, screen } from "@testing-library/react";
import { TopicExplorer } from "../components/TopicExplorer";

describe("TopicExplorer Component", () => {
  it("renders a main element", async () => {
    render(<TopicExplorer />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
