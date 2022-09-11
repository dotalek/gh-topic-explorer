import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";
import { TopicSearch } from "../components/TopicSearch";

describe("Topic Search component", () => {
  let mockedHandler;
  beforeEach(() => {
    mockedHandler = vi.fn((e) => e.preventDefault());
  });

  it("renders a form element", () => {
    render(<TopicSearch submitHandler={mockedHandler} />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("provides at least one text field", () => {
    render(<TopicSearch submitHandler={mockedHandler} />);
    const textInputs = screen.getAllByRole("textbox");
    expect(textInputs.length).toBeGreaterThanOrEqual(1);
    textInputs.forEach((textInput) => {
      expect(textInput).toBeInTheDocument();
    });
  });

  it("provides a submit button", () => {
    render(<TopicSearch submitHandler={mockedHandler} />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  it("should execute a callback when the submit button is pressed", async () => {
    render(<TopicSearch submitHandler={mockedHandler} />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    expect(mockedHandler).toHaveBeenCalled();
  });

  it("should execute a callback if the form is submitted", () => {
    render(<TopicSearch submitHandler={mockedHandler} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(mockedHandler).toHaveBeenCalled();
  });
});
