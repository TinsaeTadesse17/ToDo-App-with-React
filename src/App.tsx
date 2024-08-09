import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import image from "./images/image.png";
import "./App.css";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, updatedTask: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <img className="image-container" src={image} alt="image" />
      <h1>Todo List</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
