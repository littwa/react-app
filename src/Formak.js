import React from "react";
import { NavLink } from "react-router-dom";

class Formak extends React.Component {
  state = { name: "", pass: "", agree: false, priority: "", selected: "" };

  changeInput = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    const forma = new FormData(e.currentTarget);
    const data = {};
    forma.forEach((value, name) => (data[name] = value));
    console.dir(data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.changeInput}
          />
          <input
            type="text"
            name="pass"
            value={this.state.pass}
            placeholder="pass"
            onChange={this.changeInput}
          />
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.changeInput}
          />
          Agree
          <input
            type="radio"
            name="priority"
            checked={this.state.priority === "hight"}
            value="hight"
            onChange={this.changeInput}
          />
          Hight
          <input
            type="radio"
            name="priority"
            checked={this.state.priority === "medium"}
            value="medium"
            onChange={this.changeInput}
          />
          Medium
          <input
            type="radio"
            name="priority"
            checked={this.state.priority === "low"}
            value="low"
            onChange={this.changeInput}
          />
          Low
          <select name="selected" value={this.state.selected} onChange={this.changeInput}>
            <option value="" disabled>
              Choose number
            </option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
          </select>
          <button type="submit">Send!</button>
        </form>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/a">About</NavLink>
            </li>
            <li>
              <NavLink to="/c">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    );
  }
}

export default Formak;
