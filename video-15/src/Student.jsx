import React, { Component } from 'react'

export default class Student extends Component {
  constructor(props){
    super(props)
    console.log(this.props.show)
    this.state = {value:"block"}
    
  }
  componentWillUnmount(){
    console.log("componentWillUnmount",this.state.value)
  }
  render() {
  console.log(this.state.value)
    return (
      <div className='App'>
        <h1 style={{display:`${this.state.value}`}}>{this.state.value}</h1>
        <button onClick={()=>this.setState({value:this.state.value==="block"?"none":"block"})}>Change</button>
       
      </div>
    )
  }
}
