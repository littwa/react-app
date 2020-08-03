import React from "react";
import { v4 as uuidv4 } from "uuid";
import TaskGenerate from "./TaskGenerate/TaskGenerate";
import TaskContainer from "./TaskConteiner/TaskContainer";

class App extends React.Component {
  state = {
    toDoList: [],
  };

  addTask = (name, description, priority) => {
    const taska = {
      name,
      description,
      id: uuidv4(),
      completed: false,
      priority,
    };

    this.setState((prevState) => {
      return { toDoList: [...prevState.toDoList, taska] };
    });
  };

  updateTask = (idTask) => {
    this.setState((prevState) => ({ toDoList: prevState.toDoList.map((t) => (t.id === idTask ? { ...t, completed: !t.completed } : t)) }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h2>Add Tasks</h2>
          <TaskGenerate addTask={this.addTask} />
        </div>

        <div>
          <h2>Added Task:</h2>
          <TaskContainer arrayTasks={this.state.toDoList} updateTask={this.updateTask} />
        </div>
      </>
    );
  }
}

export default App;
