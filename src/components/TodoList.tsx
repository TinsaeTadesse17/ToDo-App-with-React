import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTask: string) => void;
  onToggleComplete: (id: number) => void;
};

type TodoListComponent = React.FunctionComponent<TodoListProps>;

const TodoList: TodoListComponent = ({
  todos,
  onDelete,
  onUpdate,
  onToggleComplete,
}) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggleComplete={onToggleComplete}
        />
      ))}
      {!todos.length && <h2>No Tasks yet.</h2>}
    </div>
  );
};

export default TodoList;
