
import { useState } from 'react';
export function Menuu(){
    let [menustatus , setmenustatus] = useState(false);
    let [modalstatus,setmmodalstatus] =useState(false);
    
    return (
        <div className="menunquiry">
              <button className='enbtn' onClick={()=>setmmodalstatus(!modalstatus)}> {modalstatus?"":"Enquiry"}</button>
      <div onClick={()=>setmmodalstatus(!modalstatus)} className= {`overlay showoverlay}`}></div>
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