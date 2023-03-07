import React from 'react';

const ParentCompoent = ({showAlert}) => {
  return (
    <div>
      <button onClick={()=>showAlert(`I am child2 two of App.js`)}>Parent Click</button>
    </div>
  );
}

export default ParentCompoent;
