import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let go = ()=>{
  alert ("welocme to my first app")
}
function App() {

  let[status, setsatus ] = useState(false);

  let [menustatus , setmenustatus] = useState(false);

  return (
    <div className="App">
      <div className='menu'></div>
   <input type={status?"name":"password"}></input><button className='bg-[red]' onClick={()=>setsatus(!status)}>{status?"hide":"Show"}</button>
    </div>
  );
}

export default App;
