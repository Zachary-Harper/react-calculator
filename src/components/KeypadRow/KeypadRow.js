import React, { Component } from "react";
import "./KeypadRow.css";

//main KeypadRow component
class KeypadRow extends Component {
  render() {
      return (
          <div className="KeypadRow">
              {this.props.children}
          </div>
      );
  }
}

export default KeypadRow;
