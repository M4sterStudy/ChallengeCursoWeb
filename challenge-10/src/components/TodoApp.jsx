import React, { useState } from 'react';
import useTodo from '../hooks/useTodo';
import './StyleTodoApp.css';

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleComplete, countTodos, countPendingTodos } = useTodo();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="todo-app"> {/* Agrega la clase "todo-app" al contenedor principal */}
      <h1>Todo App</h1>
      <div className="input-container"> {/* Agrega la clase "input-container" al contenedor de entrada */}
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <p className="todo-count">Total Todos: {countTodos}</p>
        <p className="todo-count">Pending Todos: {countPendingTodos}</p>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={`todo-description ${todo.completed ? 'completed' : ''}`} // Aplica clase condicionalmente
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.description}
            </span>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
