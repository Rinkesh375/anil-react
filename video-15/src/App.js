import React,{useState} from 'react'
import Update from './Update'

function App() {
  const [name,setName] = useState("Rinkesh")
  const [count,setCount] = useState(1)

  
  return (
    <div className='App'>

      <Update name={name} count={count} />
      <button onClick={()=>setName(name==="Rinkesh"?"Rinkesh Bihari":"Rinkesh")}>Change Name</button>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default App
