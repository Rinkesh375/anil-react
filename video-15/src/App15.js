// empoyee 

// import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

import React, { Component } from 'react'


export default class App15 extends Component {
  state = {name:"Rinku"}
  updateName = ()=>{
    this.setState({name:this.state.name==="Rinkesh"?"Rajkumar":"Rinkesh"})
  }
  render() {
    return (

      <div className="App">
          <Employee name={this.state.name} email="rinkeshujjwal16@gmai.com"/>
          <button onClick={this.updateName}>Click to change</button>
      </div>

    )
  }
}



