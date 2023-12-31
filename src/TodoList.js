import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = (props) => {
  // set state of todos
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    todo.id = uuid();
    setTodos((todos) => [...todos, todo]);
  };

  const removeTodo = (id) => {
    const todosCopy = [...todos.filter((todo) => todo.id !== id)];
    setTodos(todosCopy);
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <ul className='TodoList'>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            task={todo.task}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
