import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Silly tests", () => {
  test("true is true", () => {
    expect(true).toBe(true);
  });

  test("false is false", () => {
    expect(false).toBe(false);
  });
});

describe("App tests", () => {
  // test("renders whole App component", () => {
  //   render(<App />);

  //   screen.debug();
  // });
  test("Gets add element", () => {
    render(<App />);

    expect(screen.getByText("Add Element")).toBeInTheDocument();
  });
  test("Gets accessible roles", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  test("Gets placeHolder text", () => {
    render(<App />);

    expect(
      screen.getByPlaceholderText("Add new ToDo Element")
    ).toBeInTheDocument();
  });
  test("Assert placeHolder text is not there", () => {
    render(<App />);

    expect(screen.queryByPlaceholderText("Add new ToDo Helement")).toBeNull();
  });
});
