import React, { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTask: string) => void;
  onToggleComplete: (id: number) => void;
};

type TodoItemComponent = React.FunctionComponent<TodoItemProps>;

const TodoItem: TodoItemComponent = ({
  todo,
  onDelete,
  onUpdate,
  onToggleComplete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleSave = () => {
    onUpdate(todo.id, task);
    setIsEditing(!isEditing);
  };

  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="todo-item">
      <div className="todo-item-text">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleComplete}
        />
        {isEditing ? (
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        ) : (
          <li>{todo.task}</li>
        )}
      </div>
      <div>
        <button onClick={() => onDelete(todo.id)}>
          <MdDelete />
        </button>
        {isEditing ? (
          <button onClick={handleSave}>
            <IoIosSave />
          </button>
        ) : (
          <button onClick={() => setIsEditing(!isEditing)}>
            <MdModeEdit />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
