import React from "react";

const Todo = ({ id, task, removeTodo }) => {
  const handleClick = (evt) => {
    const { id } = evt.target.parentElement;
    removeTodo(id);
  };
  return (
    <li
      id={id}
      key={id}
      className='Todo'>
      <p>{task}</p>
      <button onClick={handleClick}>X</button>
    </li>
  );
};

export default Todo;
