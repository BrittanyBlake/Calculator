import React from 'react';
import ButtonPanel from '../button-panel/ButtonPanel';
import Display from '../display/Display';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <h1 className={styles.title}>Calculator</h1>
        <ButtonPanel />
        <Display />
      </div>
    </div>
  );
}

export default App;
