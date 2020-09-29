import React from 'react';
import ButtonPanel from '../ButtonPanel';
import Display from '../Display';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.container}>
      <div class={styles.App}>
        <h1 class={styles.title}>Calculator</h1>
        <ButtonPanel />
        <Display />
      </div>
    </div>
  );
}

export default App;
