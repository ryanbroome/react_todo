import React, { useState } from "react";

const NewTodoForm = (props) => {
  // Starter / clear Form Values
  const INITIAL_STATE = {
    task: "",
  };

  // create state for form data values
  const [formData, setFormData] = useState(INITIAL_STATE);

  //   keep form values current in state formData by updating on every change
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>More Todo</h3>
      <label htmlFor='task'>Todo</label>
      <input
        id='task'
        type='text'
        name='task'
        placeholder='task'
        value={formData.task}
        onChange={handleChange}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
