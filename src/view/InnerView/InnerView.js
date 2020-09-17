import React from "react";
import st from "../../components/Layout.module.css";

class InnerView extends React.Component {
 state = {
  name: "",
  check: false,
  rank: "",
  sel: ""
 };

 changeInput = e => {
  console.dir(e.target);
  const { name, checked, value } = e.target;
  this.setState({ [name]: e.target.type === "checkbox" ? checked : value });
 };

 onBack = () => {
  this.props.history.push("/");
 };

 submitForm = e => {
  e.preventDefault();

  console.dir(e.target.elements);

  let formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, name) => {
   data[name] = value;
  });
  console.dir(data);
 };
 render() {
  return (
   <div className={st.content}>
    <button onClick={this.onBack}>back to home</button>
    <form onSubmit={this.submitForm}>
     InnerView
     <label>
      <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.changeInput} />
     </label>
     <label>
      <input type="checkbox" name="check" checked={this.state.check} onChange={this.changeInput} />
     </label>
     <label>
      <input
       type="radio"
       name="rank"
       checked={this.state.rank === "hight"}
       value="hight"
       onChange={this.changeInput}
      />
      <input
       type="radio"
       name="rank"
       checked={this.state.rank === "low"}
       value="low"
       onChange={this.changeInput}
      />
     </label>
     <label>
      <select name="sel" value={this.state.sel} onChange={this.changeInput}>
       <option value="" disabled>
        Change!
       </option>
       <option value="nezhun">Nezhun</option>
       <option value="kiev">Kiev</option>
       <option value="chernigov">Chernigov</option>
      </select>
     </label>
     <button type="submit">SubmitForm!</button>
    </form>
   </div>
  );
 }
}

export default InnerView;
