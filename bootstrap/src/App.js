// import logo from './logo.svg';
import './App.css';
// import  {PureComponent } from 'react';
import  {Component } from 'react';
// import User from './User';
// import {Table} from 'react-bootstrap';


 export default class App extends Component {
  constructor(){
    super()
    this.state = {count:1}
  }
  render() {
    console.log("Re-render")
    return (
      <div className='App'>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
      </div>
    );
  }
} 



// "---------------------------------------------------------------------------"
/*  export default class App extends PureComponent {
  constructor(){
    super()
    this.state = {count:1}
  }
  render() {
    console.log("Re-render")
    return (
      <div className='App'>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
      </div>
    );
  }
}   */

