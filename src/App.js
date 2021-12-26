import { useState } from 'react';
import './App.css';
import FistEx from './component/FistEx';
import FourthEx from './component/FourthEx';
import SecondEx from './component/SecondEx';
import ThirdEx from './component/ThirdEx';
import Hook from './component/Hook';
import Hookfi from './component/Hookfi';
import Hookse from './component/Hookse';
import User from './component/User';
import Layout from './component/Layout';



function App ()
{
  const [division, setDivison] = useState(10)
  function divison ()
  {
    setDivison(division / 2)
  }

  return (
    <>
      <SecondEx />
      <FistEx />
      <ThirdEx />
      <FourthEx />
      <Hook />
      <button onClick={divison}>ClickHere</button>
      <h1>{division}</h1>
      <Hookfi />
      <Hookse />
      <User />
      <Layout />
    </>
  );
}

export default App;
