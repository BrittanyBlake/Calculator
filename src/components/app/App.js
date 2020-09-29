import React, { Component } from "react";
import Display from '../display/Display';
import ButtonPanel from '../button-panel/ButtonPanel';
// eslint-disable-next-line
import calculate from '../../logic/calculate';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.title}>Calculator</h1>
          <Display />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
