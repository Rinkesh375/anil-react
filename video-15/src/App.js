import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = ({name:"Rinkesh"})
    console.log("Constructor")
  }
  componentDidMount(){
    console.log("Did mount ")
  }
  render() {
    console.log("render")
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:this.state.name==="Rinkesh"?"karan":"Rinkesh"})}>Click</button>
      </div>
    )
  }
}
