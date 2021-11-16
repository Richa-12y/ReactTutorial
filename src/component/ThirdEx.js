
import React,{useState} from 'react';

function ThirdEx() {
  const [mulnumber,setMulnumber]=useState(1)
  function multiplection(){
    setMulnumber(mulnumber*2)
  }
  return (
    <div className="App">
    <button onClick={multiplection}>*</button>
    <h1>{mulnumber}</h1>
    
    </div>
  );
}

export default ThirdEx;
