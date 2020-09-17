import React, { lazy, Suspense } from "react";
import { createContext } from "react";
import Layout from "./Layout";
import Home from "../view/Home/Home";
import PageSearch from "../view/PageSearch/PageSearch";
import About from "../view/About/About";
import Detail from "../view/Detail/Detail";
import DetailB from "../view/DetailB/DetailB";
import PhoneBook from "../view/PhoneBook/PhoneBook";
import { Route, Switch } from "react-router-dom";
import InnerView from "../view/InnerView/InnerView";

// export const T = createContext();

class App extends React.Component {
 state = { pic: [] };
 // static changePic = (value) => this.setState({ pic: value });
 changePic = value => this.setState({ pic: value });
 render() {
  return (
   <Layout>
    <Suspense fallback={<div>Loading...</div>}>
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
      {/* <Route path={"/about"} exact component={About} /> */}
      <Route path={"/about"} exact component={lazy(() => import("../view/About/About"))} />
      <Route path={"/phone"} exact component={PhoneBook} />
      <Route path={"/search/inner"} exact component={InnerView} />
     </Switch>
    </Suspense>
   </Layout>
  );
 }
}

export default App;
