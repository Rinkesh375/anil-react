import React,{useState,useEffect} from 'react'

function App() {
  const [name,setName] = useState("Rinkesh")
  const [count,setCount] = useState(1)
/*   useEffect(()=>{
    console.log("Effect")
  },[])  */

  useEffect(()=>{
    console.log("Effect")
  },[name])
  
  return (
    <div className='App'>
      <h1>{name}</h1>
      <h4>{count}</h4>
      <button onClick={()=>setName(name==="Rinkesh"?"Rinkesh Bihari":"Rinkesh")}>Change Name</button>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default App
