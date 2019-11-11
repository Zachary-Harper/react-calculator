import React, { Component } from "react";
import "./Screen.css"
import ResultsScreen from "../ResultsScreen/ResultsScreen.js"
import ComputationScreen from "../ComputationScreen/ComputationScreen.js"
//main Screen component
class Screen extends Component {
    render() {
        return (
            <div className="Screen">
                <ResultsScreen>
                    {this.props.result}
            </ResultsScreen>
                <ComputationScreen>
                   {this.props.equation}
                </ComputationScreen>
            </div>
        )
    }
}

export default Screen;