import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

type TodoInputProps = {
  onAddTodo: (task: string) => void;
};

type TodoInputComponent = React.FunctionComponent<TodoInputProps>;

const TodoInput: TodoInputComponent = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      onAddTodo(task);
      setTask("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>
        <IoIosAdd />
      </button>
    </div>
  );
};

export default TodoInput;
