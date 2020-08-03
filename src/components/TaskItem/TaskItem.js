import React from "react";

let TaskItem = ({ task, updateTask }) => {
  return (
    <li>
      <h4>{task.name}</h4>
      <p>{task.description}</p>
      <label>
        <input type="checkbox" checked={task.completed} onChange={updateTask} />
      </label>
    </li>
  );
};

export default TaskItem;
