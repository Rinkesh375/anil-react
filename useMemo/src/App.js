
import './App.css';

import React,{useState} from 'react';
import Home from "./component/Home.jsx"
import About from './component/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

