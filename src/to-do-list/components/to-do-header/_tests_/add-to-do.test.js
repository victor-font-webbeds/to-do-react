import { render, screen } from "@testing-library/react";
import ToDoHeader from "../ToDoHeader";
import ToDoContextProvider from "../../../context/ToDoContext";
import userEvent from "@testing-library/user-event";

describe("Add element tests", () => {
  test("add element input assertive", () => {
    render(
      <ToDoContextProvider>
        <ToDoHeader />
      </ToDoContextProvider>
    );
    expect(
      screen.getByPlaceholderText("Add new ToDo Element")
    ).toBeInTheDocument();
  });

  test("fire input event", () => {
    render(
      <ToDoContextProvider>
        <ToDoHeader />
      </ToDoContextProvider>
    );
    expect(screen.queryByText(/JavaScript/)).toBeNull();

    userEvent.type(
      screen.getByPlaceholderText("Add new ToDo Element"),
      "JavaScript"
    );

    expect(screen.getByDisplayValue(/JavaScript/)).toBeInTheDocument();
  });
});
