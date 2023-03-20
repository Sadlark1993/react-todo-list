import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoList } from '../../components/TodoList';

function Home() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const TODOS_STORAGE = 'todos.recover';

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(TODOS_STORAGE));
    if (storedTodos) setTodos((old) => [...old, ...storedTodos]);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') handleAddTodo();
    });
    return document.removeEventListener('keydown', (event) => {
      if (event.key === 'Enter') handleAddTodo();
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todoNameRef.current.value === '') return;
    const newTodo = {
      id: uuidv4(),
      name: todoNameRef.current.value,
      completed: false
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const checked = newTodos.find((todo) => todo.id === id);
    checked.completed = !checked.completed;
    setTodos(newTodos);
  };

  const handleClearComplete = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.completed).length} left to do</div>
    </>
  );
}

export default Home;
