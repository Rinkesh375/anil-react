import React, { Component } from 'react'

export default class User extends Component {
  constructor(props){
      super(props)
      console.log(1)
      
    }
    render() {
      console.log(this.props)
      return (
        <>
        <h1>{this.props.state.name}</h1>
        </>
            
    )
  }
}
