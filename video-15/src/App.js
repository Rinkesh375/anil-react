import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {count:1}
    console.log(this.state.count,"constructor")
  }
  shouldComponentUpdate(){
    // conditonal re-rendering
    if(this.state.count<5){
      console.log(this.state.count,"Should mount")
      return true;
    }
    return false;
  }
  
  render() {
    console.log(this.state.count,"render")
    return (
      <div className='App'>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}
