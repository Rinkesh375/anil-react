import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = ({count:1})
    console.log("Constructor")
  }
  componentDidUpdate(prePop,preState,snapshot){
    console.log(preState,snapshot)
    if(this.state.count<=10){
      this.setState({count:this.state.count+1})
    }
    
  }
  render() {
    console.log("render")
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
      </div>
    )
  }
}
