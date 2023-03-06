import React from 'react';


const Button = () => {
    const showAlert = ()=> alert(`You have clicked on This`)
  return (
 <>
 <button onClick={showAlert}>Click Me</button>
 </>
  );
}



const App8 = () => {
  return (
   <div>
    <h1>Hi my name is ...</h1>
        <Button />
           </div>
  );
}

export default App8;
