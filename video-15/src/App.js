import React, { Component } from 'react'
import User from './User';

export default class App extends Component {
  state = {name:"Rinkesh",school:"Masai"};
  // constructor(){
  //   super()
  // }
  render() {
 
    return (
      <div className='App'>
        <button onClick={()=>this.setState({name:"rinkesh",school:"terminated"})}>Click</button>
        <User state = {this.state}/>
      </div>
    )
  }
}

