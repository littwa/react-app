import React, { Component, createContext } from "react";
import userAPI from "../services/user-api";

// const Context = createContext();

export default class AuthContext extends Component {
 //  static Consumer = Context.Consumer;

 static Context = createContext();

 static Consumer = AuthContext.Context.Consumer;
 static Provider = AuthContext.Context.Provider;

 lll = () => {
  console.log(
   "Consumer: ",
   AuthContext.Consumer,
   "Provider: ",
   AuthContext.Provider,
   "Context: ",
   AuthContext.Context
  );
 };

 static s = () => <div>888</div>;
 static t = class xxx extends React.Component {
  render() {
   return <div>444</div>;
  }
 };

 w = "a"; // ???

 logIn = () => {
  userAPI.fetchUser().then(user => this.setState({ user }));
 };

 logOut = () => {
  this.setState({ user: null });
 };

 state = {
  user: null,
  onLogIn: this.logIn,
  onLogOut: this.logOut
 };

 // constructor() {
 //   super();

 //   this.logIn = () => {};
 //   this.logOut = () => {};

 //   this.state = {
 //     user: null,
 //     onLogIn: this.logIn,
 //     onLogOut: this.logOut,
 //   };
 // }

 render() {
  this.lll();

  return (
   <>
    <AuthContext.s />
    <AuthContext.t />
    <this.w />
    <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>
   </>
  );
 }
}
