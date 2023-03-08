import React,{useEffect} from 'react';


const Update = ({name,count}) => {
/*  useEffect(()=>{
    console.log("useEffect")
 })  */

 useEffect(()=>{
    console.log("useEffect")
 },[count])
  return (
    <div className='App'>
       <h1>{count}</h1>
       <h1>{name}</h1>
      
    </div>
  );
}

export default Update;
