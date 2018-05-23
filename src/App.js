import React, { Component } from 'react';
import './App.css';
import "./style.css";
import { generateForeName, generateBirthday, generateLastName } from './dataGenerator';
import styled from "styled-components"

class App extends Component {
  constructor(props) {
    super(props);

    const personalData = [];
    const filteredData = [];

    for (let i = 0; i < 200; i++) {
        personalData.push({
            foreName: generateForeName(),
            lastName: generateLastName(),
            birthday: generateBirthday()
        });
    }

    this.state = { 
      personalData,
      filteredData,
      areForenamesAsc: false,
      areLastnamesAsc: false,
      areBirthdaysAsc: false,
      searchPhrase: ""
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

searchingTextChange = e => {
  this.setState({
    searchPhrase: e.target.value
  });
}

searchData = () => {
  this.state.filteredData = this.state.personalData.filter(p => {
    return p.foreName.toLowerCase().includes(this.state.searchPhrase.toLowerCase()) ||
    p.lastName.toLowerCase().includes(this.state.searchPhrase.toLowerCase()) ||
    p.birthday.toLowerCase().includes(this.state.searchPhrase.toLowerCase());
  });
}

  render() {
    this.searchData();
    return (
      <div className="col-lg-8 offset-lg-2">
        <Search className="col-lg-4 offset-lg-4">
          <input type="text"
            class="form-control"
            placeholder="Search"
            onChange={this.searchingTextChange}/>
        </Search>
        <Table>
          <table class="table table-striped" style={{width: "100%"}}>
            <thead>
              <tr style={{backgroundColor: "#a3b2cc"}}>
                <Heading onClick = {this.sortByForeNames}>Forename</Heading>
                <Heading onClick = {this.sortByLastNames}>Lastname</Heading> 
                <Heading onClick = {this.sortByBirthdays}>Birthday</Heading>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredData.map(i =>
                <tr>
                  <Row>{i.foreName}</Row>
                  <Row>{i.lastName}</Row> 
                  <Row>{i.birthday}</Row>
                </tr>
              )}
            </tbody>
          </table>
        </Table>
      </div>
    );
  }
}

export default App;

const Heading = styled.th`
  text-align: center;

  &:hover{
    cursor: pointer;
    background-color: #afb7c6;
  }
`

const Table = styled.div`
  overflow: auto;
  height: 400px;
`

const Row = styled.th`
  text-align: center;
`

const Search = styled.div`
  margin-top: 3vh;
  margin-bottom: 3vh;
`
