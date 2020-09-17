import React from "react";
import style from "../PhoneBook/PhoneBook.module.css";
import RenderProp from "../../components/RenderProp";

class PhoneBook extends React.Component {
 state = { name: "", number: "", favorite: false, priority: false, type: "" };

 handleChange = e => {
  let { name, value } = e.target;
  this.setState({ [name]: value });
 };
 handleCheckbox = e => {
  let { checked } = e.target;
  this.setState({ favorite: checked });
 };
 handleRadio = e => {
  this.setState({ priority: e.target.value });
 };

 render() {
  let { name, number, favorite, priority, type } = this.state;
  return (
   <div className={style.content}>
    <div>PhoneBook</div>
    <form style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
     <label>
      Name <input name="name" type="text" value={name} onChange={this.handleChange} />
     </label>
     <label>
      Number <input name="number" type="tel" value={number} onChange={this.handleChange} />
     </label>
     <label>
      Favorite
      <input name="favorite" type="checkbox" checked={favorite} onChange={this.handleCheckbox} />
     </label>
     <label style={{ border: "1px solid", padding: "1px", marginRight: "2px" }}>
      Priority: less
      <input
       name="priority"
       type="radio"
       value="low"
       checked={priority === "low"}
       onChange={this.handleRadio}
      />
      <input
       name="priority"
       type="radio"
       value="medium"
       checked={priority === "medium"}
       onChange={this.handleRadio}
      />
      <input
       name="priority"
       type="radio"
       value="hight"
       checked={priority === "hight"}
       onChange={this.handleRadio}
      />{" "}
      more
     </label>
     <label>
      <select name="type" value={type} onChange={this.handleChange}>
       <option value="" disabled>
        Choose type
       </option>
       <option value="mobile">Mobile</option>
       <option value="work">Work</option>
       <option value="home">Home</option>
      </select>
     </label>
     <button type="submit">Submit</button>
    </form>
    <RenderProp>
     {(a, b) => (
      <span>
       {a + b} | {b}
      </span>
     )}
    </RenderProp>
   </div>
  );
 }
}

export default PhoneBook;
