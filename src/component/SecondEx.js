import React, { useState } from 'react';
function SecondEx ()
{

  const [number, setNumber] = useState(0)
  function getincement ()
  {
    setNumber(number + 1)
  }
  function getdecement ()
  {
    setNumber(number - 1)

  }

  return (
    <div>
      <div className="App">
        <button onClick={getincement}> +</button>
        <h1>{number}</h1>
        <button onClick={getdecement}>-</button>
      </div>
    </div>
  )
}

export default SecondEx
