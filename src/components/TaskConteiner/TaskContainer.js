import React from "react";
import TaskItem from "../TaskItem/TaskItem";

let TaskContainer = ({ arrayTasks, updateTask }) => {
  return (
    <ul>
      {arrayTasks.map((task) => (
        <TaskItem key={task.id} task={task} updateTask={() => updateTask(task.id)} />
      ))}
    </ul>
  );
};

export default TaskContainer;
