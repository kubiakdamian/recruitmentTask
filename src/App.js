import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css";
import { generateForeName, generateDay, generateYear, generateMonth, generateBirthday, generateLastName } from './dataGenerator';

class App extends Component {
  state = {
    foreNames: [],
    lastNames: [],
    birthdays: []
  }

  componentWillMount(){
    this.fillData();
  }

  fillData = () => {
    for(var i = 0; i < 200; i++){
      this.state.foreNames.push(generateForeName());
      this.state.lastNames.push(generateLastName());
      this.state.birthdays.push(generateBirthday());
    }
  }

  render() {
    return (
      <div className="App">
        <table style={{width: "100%"}}>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Birthday</th>
          </tr>
          
          {this.state.foreNames.map(i =>
            <tr>
              <td>{i}</td>
              <td>i</td> 
              <td>i</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default App;
