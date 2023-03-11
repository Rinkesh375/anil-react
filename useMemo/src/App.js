
import './App.css';
import React,{useRef} from 'react';
import Child from './Child';

const App = () => {
  const chunnu = useRef()
  // maniputating any element using useRef,forward Ref  from parent to child function based component
  const changeSomething = ()=>{
    chunnu.current.value = "Enter you text here";
    chunnu.current.style.color = "blue";
    chunnu.current.style.fontSize = "green";
  }

  return (
    <div className='App'>
       <Child ref={chunnu}/>
      <button onClick={changeSomething}>Click</button>
    </div>
  );
}

export default App;
