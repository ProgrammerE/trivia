import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { "" };
    }

    callAPI() {
        fetch("https://opentdb.com/api.php?amount=1&type=multiple")
            .then(res => res.text())
            .then(res => this.setState({ res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to React</h1>
                </header>
                <p>{this.state}</p>
            </div>
        );
    }
}

export default App;

