import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import Todo from "./Todo";

// TodoList smoke test
it("renders without crashing", function () {
  render(<TodoList />);
});

// TodoList snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

//Todo: NewTodoForm test
it("NewTodoForm test", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("Todo");
  const btn = queryByText("Add Todo");

  expect(queryByText("Wash Car")).not.toBeInTheDocument();

  fireEvent.change(input, { target: { value: "Wash Car" } });
  fireEvent.click(btn);

  expect(queryByText("Wash Car")).toBeInTheDocument();
});

// Todo smoketest
it("renders Todo without crashing", function () {
  render(<Todo id={uuid()} />);
});

// Todo snapshot test
it("Todo snapshot test", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
