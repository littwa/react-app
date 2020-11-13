import React from "react";
import style from "./InformationByHabit.module.css";
import image_boy from "../../img/image_boy.svg";
import ChangeOrDelHabbit from "../ChangeOrDelHabbit/ChangeOrDelHabbit";

const cross = require("../../img/Vector_104_cross.svg");

class InformationByHabbit extends React.Component {
  state = { showModalChangeOrDelHabbit: false };
  handleshowModalChangeOrDelHabbit = e => {
    this.setState({ showModalChangeOrDelHabbit: !this.state.showModalChangeOrDelHabbit });
  };
  render() {
    return (
      <div className={style.canvas}>
        <button onClick={this.handleshowModalChangeOrDelHabbit} className={style.btnchange}>
          ...
        </button>
        {this.state.showModalChangeOrDelHabbit && <ChangeOrDelHabbit />}
        <div className={style.avatar}>
          <img className={style.imgavatar} src={image_boy} alt={"pic"} />
        </div>
        <div>
          <h3>Title</h3>
          <div>3333333</div>
        </div>
        <div>
          <h4>Підтвердження</h4>
          <div>
            <button className={style.btnconfirm}></button>
            <button className={style.btnfailure}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default InformationByHabbit;

{
  /* <img src={Ellipse_48_blue} alt={"pic"} />

<img src={process.env.PUBLIC_URL + "/imghabbits/Ellipse_48_blue.svg"} alt={"pic"} />

<img src={cross.default} alt={"pic"} width={100} /> */
}
