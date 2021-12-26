import { useState } from 'react';

function FourthEx ()
{
  const [state, setState] = useState("Good morning")
  function changeText ()
  {
    setState("Good Afternoon")
  }
  function changeText2 ()
  {
    setState("Good Evening")

  }
  function changeText3 ()
  {
    setState("Good night")

  }
  return (
    <div className="App">
      <button onClick={changeText}>Clickme</button>
      <div>
        <h1>{state}</h1>
      </div>
      <button onClick={changeText2}>Presshere</button>
      <button onClick={changeText3}>output</button>
    </div>
  );
}

export default FourthEx;
