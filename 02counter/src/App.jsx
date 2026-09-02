import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  let [ count,setCount]=useState(0);

  const addCount=()=>{
    if(count<20)
      setCount(prevCount=>prevCount+1);
  }

  const removeCount=()=>{
    if(count>0)
      setCount(prevCount=>prevCount-1);
  }


  return (
    <>
      <h1>counter program</h1>
      <h3>counter :{count}</h3>
      <button
      onClick={addCount}>Add Count</button>
      <br /><br />
      <button
      onClick={removeCount}>remove Count</button>
    </>
  )
}

export default App
