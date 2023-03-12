
import './App.css';
import React,{useState} from 'react';

const App = () => {
  return (
    <>
      <div className='App'>
        <ColorChangeRed hoc={Counter}/>
        <ColorChangeGreen Hoc={Counter}/>
        <ColorChangeBlue Hoc={Counter}/>
      </div>
    </>
  
  );
}
const ColorChangeRed = (props)=>{
  return (
     <div style={{background:"red"}}>
        <props.hoc/>
    </div>
  )
}

const ColorChangeGreen = ({Hoc})=>{


  return (

     <div style={{background:"green"}}>
          <Hoc/>
    </div>
  )
}

const ColorChangeBlue = ({Hoc})=>{


  return (

     <div style={{background:"blue"}}>
          <Hoc/>
    </div>
  )
}


const Counter = () => {
  const[count,setCount] = useState(1)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  
  );
}



export default App;

