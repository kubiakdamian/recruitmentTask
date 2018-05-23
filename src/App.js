import React, { Component } from 'react';
import './App.css';
import "./style.css";
import { generateForeName, generateBirthday, generateLastName } from './dataGenerator';
import styled from "styled-components"

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

    this.state = { 
      personalData,
      areForenamesAsc: false,
      areLastnamesAsc: false,
      areBirthdaysAsc: false
     };
}

sortByForeNames = () => {
  var data = this.state.personalData;

  if(!this.state.areForenamesAsc){
    data.sort(function(obj1, obj2) {
      return obj1.foreName.localeCompare(obj2.foreName);
    });
    this.setState({areForenamesAsc: true})
  }else{
    data.sort(function(obj1, obj2) {
      return obj2.foreName.localeCompare(obj1.foreName);
    });
    this.setState({areForenamesAsc: false})
  }
  
  this.setState({
    personalData: data
  })
}

sortByLastNames = () => {
  var data = this.state.personalData;

  if(!this.state.areLastnamesAsc){
    data.sort(function(obj1, obj2) {
      return obj1.lastName.localeCompare(obj2.lastName);
    });
    this.setState({areLastnamesAsc: true})
  }else{
    data.sort(function(obj1, obj2) {
      return obj2.lastName.localeCompare(obj1.lastName);
    });
    this.setState({areLastnamesAsc: false})
  }

  this.setState({
    personalData: data
  })
}

sortByBirthdays = () => {
  var data = this.state.personalData;

  if(!this.state.areBirthdaysAsc){
    data.sort(function(obj1, obj2){
      return new Date(obj1.birthday) - new Date(obj2.birthday);
    });  
    this.setState({areBirthdaysAsc: true})
  }else{
    data.sort(function(obj1, obj2){
      return new Date(obj2.birthday) - new Date(obj1.birthday);
    });
    this.setState({areBirthdaysAsc: false})
  }

  this.setState({
    personalData: data
  })
}

  render() {
    return (
      <div className="App">
        <table style={{width: "100%"}}>
          <tr style={{height: "5vh", backgroundColor: "#a3b2cc"}}>
            <Heading onClick = {this.sortByForeNames}>Forename</Heading>
            <Heading onClick = {this.sortByLastNames}>Lastname</Heading> 
            <Heading onClick = {this.sortByBirthdays}>Birthday</Heading>
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

const Heading = styled.th`
  &:hover{
    cursor: pointer;
    background-color: #afb7c6;
  }
`
