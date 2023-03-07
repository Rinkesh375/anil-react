import React from 'react';
import Child1Component from './Child1Component';
import Child2Component from './Child2Compoent';

const App = (value) => {
  const  showAlert = (value)=>{
    alert(value)
  }
  return (
    <div className='App'>
      <>
      <Child1Component showAlert = {showAlert}/>
      <Child2Component showAlert = {showAlert}/>
      </>
    </div>
  );
}

export default App;
