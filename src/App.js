import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ContextCompProvider from "./Context/ContextCompProvider";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ContextCompProvider>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/a" component={About} />
              <Route path="/c" component={Contact} />
            </Switch>
          </Layout>
        </ContextCompProvider>
      </BrowserRouter>
    );
  }
}

export default App;
