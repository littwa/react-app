import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//===================================================================

ReactDOM.render(<App />, document.querySelector("#root"));
// console.log(React.Children);

//====================Promise=TEST УДАЛИТЬ==========================================
// let fff = async () => await (5 + 7 + 7);
// fff().then((f) => console.log(f));

// let promise = new Promise((resolve, reject) => {
//   let d = 1;

//   if (d > 0) {
//     resolve("resolve!!!");
//   } else {
//     reject("reject!!!");
//   }
// });
// promise.then((q) => console.log(q)).catch((q) => console.log(q));

// //=====================Class=TEST УДАЛИТЬ===================================

class Tehnica {
  static speed = 999;
  #priv = 100;
  name = "Auto";
  engine = "V8TDi";
  p = this.#priv;

  constructor(q = "q", e = 3, z = 1) {
    if (this.#priv < Tehnica.speed) {
      this.namett = 333 + z;
    }
    this.name = q;
    this.engine = e;
  }
  foouu() {
    console.log("Yhoo!");
  }
}

class SuperTehnica extends Tehnica {
  namerr = "AutoPlus";
  constructor(v, y, u, o) {
    super(v, o, u);
    this.namexxx = y;
  }
}
let g = new SuperTehnica();
g.aa = 1;

//===================================================================
