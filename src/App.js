import React, { Component } from 'react';
import styles from './App.module.css';
import HomePage from './pages/HomePage.js'

class App extends Component {

  render() {

    return (
      <div className={styles.container}>
          <HomePage/>
      </div>
    );
  }
}

export default App;
