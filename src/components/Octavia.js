import React from "react";

class Octavia extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.children}
        <div>Scoda Octavia is awesome!</div>
      </>
    );
  }
}

export default Octavia;
