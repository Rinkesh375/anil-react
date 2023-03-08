// import logo from './logo.svg';
import './App.css';
import User from './User';
// import {Table} from 'react-bootstrap';

function App() {
  let userArr = [
    {name:"Rinkesh",course:"FSD"},
    {name:"Nitish",course:"Backend"},
    {name:"Shekhar",course:"Machince Learing"},
    {name:"Akthar",course:"Java Developer"},
    {name:"Abishek",course:"Data Analtics"}
  ]
  return (
    <div className="App">
     {userArr.map((ele,index)=> <User key={index} {...ele}/>)}
    </div>
  );
}

export default App;
