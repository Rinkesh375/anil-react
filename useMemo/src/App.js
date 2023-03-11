
import './App.css';
import React,{useState,useMemo} from 'react';
function App() {
  const [count,setCount] = useState(1)
  const [num,setNum] = useState(5)
  const [value,setValue] = useState(10)

 const multi  = useMemo(()=>{
    console.log("One is run")
    return num*num
  },[count]);
  return (
    <div className="App">
      <h1>{multi}</h1>
      <h2>{count}</h2>
      <h3>{value}</h3>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setValue(value*value)}>Value</button>
    </div>
  );
}

export default App;
