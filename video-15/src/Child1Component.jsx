import React from 'react';

const Child1Component = ({showAlert}) => {
  return (
    <div>
      <button onClick={()=>showAlert(`I am child one of App.js`)}>Click child</button>
    </div>
  );
}

export default Child1Component;
