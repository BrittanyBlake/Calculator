import React, { Component } from "react";
import Display from "../display/Display";
import ButtonPanel from "../button-panel/ButtonPanel";
// eslint-disable-next-line
import calculate from "../../logic/calculate";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const result = "0" || this.state.next || this.state.total;
    return (
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.title}>Calculator</h1>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
