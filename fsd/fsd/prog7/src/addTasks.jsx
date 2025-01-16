
import React, { useState } from 'react';

// Define an incrementing ID counter
let taskIdCounter = 1;

const AddTasks = ({ tasks, setTasks }) => {
  const [taskValue, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: taskIdCounter++, // Use the incrementing counter
      newtask: taskValue,
      completed: false,
    };

    setTasks([...tasks, task]); // Add the new task to the tasks array
    setTask(""); // Clear the input field
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={taskValue}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="button1" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTasks;
