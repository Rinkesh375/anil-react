
import './App.css';

import React,{useState} from 'react';
import Home from "./component/Home.jsx"
import About from './component/About.jsx';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Navbar from './component/Navbar';


const App = () => {
  return (
  <>
    <BrowserRouter>
{/* <Link to="/" style={{margin:"1rem"}}>Home</Link> 
    <Link to="/about">About</Link>  */}
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

