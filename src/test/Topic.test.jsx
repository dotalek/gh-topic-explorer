import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Topic } from "../components/Topic";

describe("Topic Component", () => {
  let mockedTopic;
  let mockedHandler;
  beforeEach(() => {
    mockedTopic = {
      name: "react",
      stargazerCount: 1234,
    };
    mockedHandler = vi.fn();
  });

  it("renders with an article element", async () => {
    render(<Topic topic={mockedTopic} clickHandler={mockedHandler} />);
    const articleElement = screen.getByRole("article");
    expect(articleElement).toBeInTheDocument();
  });

  it("displays the name of a topic", () => {
    render(<Topic topic={mockedTopic} clickHandler={mockedHandler} />);
    const title = screen.getByText(mockedTopic.name);
    expect(title.innerHTML).toEqual(mockedTopic.name);
  });

  it("displays a topic's stargazer count", () => {
    render(<Topic topic={mockedTopic} clickHandler={mockedHandler} />);
    const stargazerCount = screen.getByText(mockedTopic.stargazerCount);
    expect(stargazerCount).toBeInTheDocument();
    expect(stargazerCount.innerHTML).toEqual(
      mockedTopic.stargazerCount.toString(),
    );
  });

  it("should execute a callback on click", async () => {
    render(<Topic topic={mockedTopic} clickHandler={mockedHandler} />);
    const topic = screen.getByRole("article");
    await userEvent.click(topic);
    expect(mockedHandler).toHaveBeenCalled();
  });
});
