import React from "react";
import { createContext } from "react";
import Layout from "./Layout";
import Home from "../view/Home/Home";
import PageSearch from "../view/PageSearch/PageSearch";
import About from "../view/About/About";
import Detail from "../view/Detail/Detail";
import DetailB from "../view/DetailB/DetailB";
import { Route, Switch } from "react-router-dom";

// export const T = createContext();

class App extends React.Component {
 static T = createContext(); // ????????????????????????
 state = { pic: [] };
 changePic = value => this.setState({ pic: value });
 render() {
  return (
   <App.T.Provider value="T.Provider 100">
    <Layout>
     <Switch>
      <Route path={"/"} exact render={props => <Home {...props} onChangPic={this.changePic} />} />
      <Route path={"/search"} exact component={PageSearch} />
      <Route path={"/detail"} exact render={props => <Detail {...props} extraProps={this.state.pic} />} />
      <Route path={"/detail/ss"} exact component={About} />
      <Route
       path={"/detail/:ImgId"}
       exact
       render={props => <DetailB {...props} extraProps={this.state.pic} />}
      />
      <Route path={"/about"} exact component={About} />
     </Switch>
    </Layout>
   </App.T.Provider>
  );
 }
}

export default App;
