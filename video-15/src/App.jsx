import React from 'react';
import {useState} from 'react';

const App = () => {
  const [value,setValue] = useState(null)
  const [text,setText] = useState(null)
  const handleChange = (e)=>{
        setText(e.target.value)
  }
  const showValue = ()=>{
        setValue(text)
  }
  return (
    <div className='App'>
         {value?<h1>{text}</h1>:value}
        <input type="text" onChange={handleChange}/>
        <button onClick={showValue}>click</button>
      
    </div>
  );
}

export default App;
