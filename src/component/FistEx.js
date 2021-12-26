import React, { useState } from 'react';

function FistEx ()
{
  const initialValue = "rich"
  const [number, setNumber] = useState(initialValue)
  function getincement ()
  {
    setNumber("How You Doing")
  }
  function getdecement ()
  {
    setNumber("i'm fine")

  }
  return (
    <div className="App">
      <button onClick={getincement}> +</button>
      <h1>{number}</h1>
      <button onClick={getdecement}>-</button>
    </div>
  );
}

export default FistEx;
