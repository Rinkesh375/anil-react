
import './App.css';
// import React,{useState,useMemo} from 'react';

import React, { Component,createRef } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.inputRef = createRef()
  }
  // get property and value of input using ref
  getData(){
    // console.log("CHunnu")
      this.inputRef.current.style.padding = "1rem"
      this.inputRef.current.style.background = "blue"
     console.log(this.inputRef.current.value)
  }
  render() {
    return (
      <div className='App'>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getData()}>Click</button>
      </div>
    )
  }
}
