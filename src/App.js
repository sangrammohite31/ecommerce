import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let go = ()=>{
  alert ("welocme to my first app")
}
function App() {

 

  let [menustatus , setmenustatus] = useState(false);
  let [modalstatus,setmmodalstatus] =useState(false);
  return (
    
    <div className="App">
      <button className='enbtn' onClick={()=>setmmodalstatus(!modalstatus)}> Enquiry</button>
      <div className={`overlay ${modalstatus?"showoverlay":""}`}></div>
      <div className={`modaldiv  ${modalstatus?"showmodaldiv":""}`}>
        <h1>Enquiry honw</h1>
      </div>
      <button className='micon' onClick={()=>setmenustatus(!menustatus)}>
        {menustatus?<span className='times'>&times;</span>:<span>&#9776;</span>}</button>
      <div className={`menu ${menustatus? "activemenu":""}`}>
        <ul>
          <li>home</li>
          <li>Contact</li>
          <li>Gallery</li>
          <li>About</li>

        </ul>
      </div>
     </div>
  );
}

export default App;
