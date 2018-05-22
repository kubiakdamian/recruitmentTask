import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { generateForeName } from './dataGenerator'

class App extends Component {
  render() {
    return (
      <div className="App" style={{border: "1px solid black", height: "100px"}} onClick={generateForeName}>
      </div>
    );
  }
}

export default App;
