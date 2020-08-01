import React from "react";
import { uuid } from "uuidv4";

class App extends React.Component {
  state = {
    inputValue: "",
    toDoList: [],
  };

  addTask = (name) => {
    const taska = {
      name,
      id: uuid(),
      completed: false,
    };

    this.setState((prevState) => {
      return { toDoList: [...prevState.toDoList, taska] };
    });
  };

  render() {
    return (
      <>
        <div>2323</div>
      </>
    );
  }
}

export default App;
