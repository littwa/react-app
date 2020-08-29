import React from "react";
import style from "./About.module.css";
import { connect } from "react-redux";
import phAction from "../../redux/ph/phAction";

class About extends React.Component {
  state = {
    name: "",
    number: "",
    supercontact: false,
    cool: false,
    priorytet: null,
  };

  changeInputs = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({ [name]: type === "checkbox" ? checked : value });
    // this.setState({ [name]: value });
  };

  // changeCheckbox = (e) => {
  //   this.setState((s) => ({ supercontact: !s.supercontact }));
  // };

  handleSubmit = (e) => {
    e.preventDefault();

    //-------------------------------
    // console.dir(e.currentTarget.elements);

    // const formData = new FormData(e.currentTarget);
    // const data = {};

    // formData.forEach((value, name) => {
    //   data[name] = value;
    // });
    // console.log(data);
    //-------------------------------

    this.setState({ name: "", number: "" });
    console.log(this.state);
    this.props.addNum(this.state.name, this.state.number, this.state.supercontact, this.state.cool, this.state.priorytet);
    console.log(this.props);
  };

  handleRadioPriotytyChange = (e) => {
    this.setState({
      priorytet: e.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className={style.content}>
        <h4 className={style.title}>Phonebook-2</h4>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <label className={style.label}>
            Name
            <input onChange={this.changeInputs} value={this.state.name} type={"text"} name={"name"} autoComplete="off" />
          </label>
          <label className={style.label}>
            Number
            <input onChange={this.changeInputs} value={this.state.number} type={"text"} name={"number"} autoComplete="off" />
          </label>
          <label>
            Super Contact
            <input name={"supercontact"} type="checkbox" checked={this.state.supercontact} onChange={this.changeInputs} />
          </label>
          <label>
            Cool
            <input name={"cool"} type="checkbox" checked={this.state.cool} onChange={this.changeInputs} />
          </label>
          <section>
            <h2>Priorytet</h2>
            <label>
              Hiht
              <input type="radio" checked={this.state.priorytet === "hight"} name="priorytet" value="hight" onChange={this.handleRadioPriotytyChange} />
            </label>
            <label>
              Medium
              <input type="radio" checked={this.state.priorytet === "medium"} name="priorytet" value="medium" onChange={this.handleRadioPriotytyChange} />
            </label>
            <label>
              Low
              <input type="radio" checked={this.state.priorytet === "low"} name="priorytet" value="low" onChange={this.handleRadioPriotytyChange} />
            </label>
          </section>
          <button className={style.button}>Submitt!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sr: state,
});
const mapStateToDispatc = { addNum: phAction.act };

export default connect(mapStateToProps, mapStateToDispatc)(About);
