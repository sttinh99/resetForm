import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.resetElement = React.createRef();
    this.resetForm = this.resetForm.bind(this);
  }
  componentDidMount() {
    this.inputElement.current.focus();
  }
  resetForm() {
    this.resetElement.current.reset();
  }
  render() {
    return (
      <div className="App">
        <form ref={this.resetElement}>
          <input type="text" ref={this.inputElement} />
          <input type="button" value="reset" onClick={this.resetForm} />
        </form>
      </div>
    );
  }
}

export default App;
