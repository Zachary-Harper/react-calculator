import React, { Component } from "react";
import "./ResultsScreen.css";

//main ResultsScreen component
class ResultsScreen extends Component {
  render() {
    return <div className="ResultsScreen">{this.props.children}</div>;
  }
}

export default ResultsScreen;
