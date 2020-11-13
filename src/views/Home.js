import React from "react";
import Octavia from "../components/Octavia";
import Mercedes from "../components/Mercedes";
import InformationByHabbit from "../components/InformationByHabbit/InformationByHabbit";

class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#bd9", height: "400px", padding: "5px" }}>
        <Octavia propsHome={this.props}>
          <Mercedes />
          <div>1.4TSI</div>
        </Octavia>
        <InformationByHabbit />
      </div>
    );
  }
}

export default Home;
