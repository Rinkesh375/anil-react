
import './App.css';
import React,{useRef} from 'react';

const App = () => {
  const chunnu = useRef()
  // maniputating any element using useRef function based component
  const changeSomething = ()=>{
    console.log(chunnu.current.value)
    chunnu.current.style.background = `red`
    chunnu.current.style.margin = `2rem`
  }
  return (
    <div className='App'>
      <input type="text" ref={chunnu}/>
      <button onClick={changeSomething}>Click</button>
    </div>
  );
}

export default App;
