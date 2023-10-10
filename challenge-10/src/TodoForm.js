import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      id: new Date().getTime(),
      description: newTodo,
      done: false,
    });
    setNewTodo('');
  };

  return (
    <div className="col-5">
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Ingrese un nuevo Todo"
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
