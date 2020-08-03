import React from "react";
class TaskGenerate extends React.Component {
  state = {
    inputValue: "",
    inputDescription: "",
    priority: "",
  };

  taskInputChange = (e) => {
    let { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };
  radioInputChange = (e) => {
    e.persist();
    this.setState({ priority: e.target.value });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addTask(this.state.inputValue, this.state.inputDescription, this.state.priority);
          this.setState({ inputValue: "", inputDescription: "", priority: "" });
        }}
      >
        <label>
          Enter the task mame:
          <input onChange={this.taskInputChange} type="text" name="inputValue" value={this.state.inputValue} />
        </label>
        <label>
          Description task:
          <input onChange={this.taskInputChange} type="text" name="inputDescription" value={this.state.inputDescription} />
        </label>
        <label>
          Сhoose priority:
          <input type="radio" value="low" checked={this.state.priority === "low"} onChange={this.radioInputChange} />
          <input type="radio" value="middle" checked={this.state.priority === "middle"} onChange={this.radioInputChange} />
          <input type="radio" value="hight" checked={this.state.priority === "hight"} onChange={this.radioInputChange} />
        </label>
        <button type="submit">Add!</button>
      </form>
    );
  }
}

export default TaskGenerate;
