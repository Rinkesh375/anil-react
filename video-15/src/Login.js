import React,{useState} from 'react';

const Login = () => {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div>
      {loggedIn?<h1>Login User</h1>:<h1>Welcome Rinkesh</h1>}
    </div>
  );
}

export default Login;
