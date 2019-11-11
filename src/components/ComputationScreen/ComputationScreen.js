import React, { Component } from "react";
import "./ComputationScreen.css";

//main ComputationScreen component
class ComputationScreen extends Component {
  render() {
    return <div className="ComputationScreen">
      {this.props.children}
    </div>;
  }
}

export default ComputationScreen;
