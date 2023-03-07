import React,{useState} from 'react';

const App = () => {
 const [value,setValue] = useState(false)
  return (
    <div className='App'>
        {value && <h1>My name is Rinkesh</h1>}
        <button onClick={()=>setValue(!value)}>{value?"Hide":"Show"}</button>
    </div>
  );
}

export default App;
