import React, { Component } from 'react'
import Student from './Student'

export default class App extends Component {
  constructor(){
    super()
    this.state = {show:true}
    
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  
  render() {
    console.log("render")
    return (
      <div className='App'>
        {this.state.show && <Student show={{show:this.state.show}}/>} 
        <button onClick={()=>this.setState({show:!this.state.show})}>Hide/Show</button>
      </div>
    )
  }
}
