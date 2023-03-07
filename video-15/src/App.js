import React,{useState} from 'react';


const App = () => {
const [userName,setUserName] = useState(false)
const [userPassword,setUserPassword] = useState(false)
const [message,setMessage] = useState(null)
const loginCheck = (e)=>{
    e.preventDefault();
    console.log("hi")
    if(userName.length <5 ){
          setMessage(`UserName is incorrect`);
    }
     
    else if (userPassword.length<5) setMessage(`UserPassword is incorrect`);
    else setMessage(`Login successful`)
}

  
  return (
    <div className='App'>
          <h1>{message}</h1>
        <form onSubmit={loginCheck} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",marginTop:"1rem"}}>
          <input type="text" placeholder='Enter your userName' onChange={(e)=>setUserName(e.target.value)}/>
          <input type="password"  placeholder='Enter the password' onChange={(e)=>setUserPassword(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default App;
