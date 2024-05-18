import logo from './logo.svg';
import './App.css';
import {Menuu}from "./header.jsx";
import { useState } from 'react';
let go = ()=>{
  alert ("welocme to my first app")
}
function App() {

 

 return (
   
    <div className="App">
    <Menuu/>
     </div>
  );
}

export default App;
