import React, { Component } from 'react';
import '../App.css';
import logo from './logo.svg';
import Time from './components/Time';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started
        </p>
        <Time/>
      </div>
    );
  }
}

export default App;
