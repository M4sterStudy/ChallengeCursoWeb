import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    // Simular carga de datos iniciales
    const initialTodos = [
      {
        id: 1,
        description: 'Hacer los challenges',
        done: false,
      },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <div className="row">
        <TodoList todos={todos} />
        <TodoForm onAddTodo={addTodo} />
      </div>
    </>
  );
};

export default TodoApp;
