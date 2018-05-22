import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css";
import { generateForeName, generateDay, generateYear, generateMonth, generateBirthday, generateLastName } from './dataGenerator';

class App extends Component {
  constructor(props) {
    super(props);

    const personalData = [];

    for (let i = 0; i < 200; i++) {
        personalData.push({
            foreName: generateForeName(),
            lastName: generateLastName(),
            birthday: generateBirthday()
        });
    }

    this.state = { personalData };
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

          {this.state.personalData.map(i =>
            <tr>
              <th>{i.foreName}</th>
              <th>{i.lastName}</th> 
              <th>{i.birthday}</th>
            </tr>
           )}
        </table>
      </div>
    );
  }
}

export default App;
