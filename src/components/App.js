import React from "react";
// import { v4 as uuidv4 } from "uuid";
import Layout from "./Layout";

import Home from "../view/Home/Home";
import PageSearch from "../view/PageSearch/PageSearch";
import About from "../view/About/About";
import Detail from "../view/Detail/Detail";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
 render() {
  return (
   <Layout>
    <Switch>
     <Route path={"/"} exact component={Home} />
     <Route path={"/search"} exact component={PageSearch} />
     <Route path={"/detail"} exact component={Detail} />
     <Route path={"/about"} exact component={About} />
    </Switch>
   </Layout>
  );
 }
}

export default App;
