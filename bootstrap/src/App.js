// import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap';

function App() {
  let userArr = [
    {name:"Rinkesh",course:"FSD",address:[{house:698,city:"Faridabad",state:"Haryana"},{house:700,city:"Gurgoan",state:"Haryana"},{house:701,city:"Delhi",state:"Delhi"}]},
    {name:"Nitish",course:"Backend",address:[{house:698,city:"Faridabad",state:"Haryana"},{house:700,city:"Gurgoan",state:"Haryana"},{house:701,city:"Delhi",state:"Delhi"}]},
    {name:"Shekhar",course:"Machince Learing",address:[{house:698,city:"Faridabad",state:"Haryana"},{house:700,city:"Gurgoan",state:"Haryana"},{house:701,city:"Delhi",state:"Delhi"}]},
    {name:"Akthar",course:"Java Developer",address:[{house:698,city:"Faridabad",state:"Haryana"},{house:700,city:"Gurgoan",state:"Haryana"},{house:701,city:"Delhi",state:"Delhi"}]},
    {name:"Abishek",course:"Data Analtics",address:[{house:698,city:"Faridabad",state:"Haryana"},{house:700,city:"Gurgoan",state:"Haryana"},{house:701,city:"Delhi",state:"Delhi"}]}
  ]
  return (
    <div className="App">
      <Table variant="dark">
        <thead><tr><th>S.NO</th><th>Name</th><th>Course</th><th>Address</th></tr></thead>
        <tbody>
          {userArr.map((person,index)=>{
           return   <tr key={index}>
               <td>{index+1}</td>
              <td>{person.name}</td>
              <td>{person.course}</td>
               <td>
                <Table variant="dark">
                  <tbody>
                {
                person.address.map((houseAdd)=>{
                  
                  return <tr  >
                    <td>House No- {houseAdd.house}</td>
                    <td>City- {houseAdd.city}</td>
                    <td>State- {houseAdd.state}</td>
                  </tr>
                })
                }
                </tbody>
                </Table>
                </td>
                
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
