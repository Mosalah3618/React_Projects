import { useCallback, useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [isNumberAllowed,setIsNumberAllowed]=useState(false)
  const [isCharacterAllowed,setIsCharacterAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null);

  const copyToCLipBoard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  const passwordGenerator=useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumberAllowed) str+="0123456789";
    if(isCharacterAllowed) str+="!@#$%^&*()|:?-_+=";

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)


  },[length,isNumberAllowed,isCharacterAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,isNumberAllowed,isCharacterAllowed,passwordGenerator])

  return (
    <>
    <h1 className="text-3xl font-bold text-center text-white mt-10 mb-6">
    Password Generator
  </h1>
    <div className="w-full max-w-lg mx-auto mt-10 p-6 bg-gray-800 rounded-2xl shadow-2xl">

  {/* Password Input + Copy Button */}
  <div className="flex w-full mb-6">

    <input
      type="text"
      value={password}
      className="flex-1 min-w-0 px-4 py-3 bg-gray-700 text-white rounded-l-lg outline-none border border-gray-600 focus:border-blue-500"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />

    <button
      className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg transition duration-200 active:scale-95"
      onClick={copyToCLipBoard}
    >
      Copy
    </button>

  </div>


  {/* Controls */}
  <div className="space-y-5">

    {/* Length */}
    <div className="flex items-center justify-between">

      <label
        htmlFor="length"
        className="text-white font-medium"
      >
        Length: <span className="text-blue-400">{length}</span>
      </label>

      <input
        id="length"
        type="range"
        min={8}
        max={20}
        value={length}
        className="w-1/2 accent-blue-500 cursor-pointer"
        onChange={(e) => {
          setLength(e.target.value)
        }}
      />

    </div>


    {/* Numbers */}
    <div className="flex items-center gap-3">

      <input
        type="checkbox"
        defaultChecked={isNumberAllowed}
        id="numberInput"
        className="w-5 h-5 accent-blue-500 cursor-pointer"
        onChange={(e) => {
          setIsNumberAllowed((prev) => !prev)
        }}
      />

      <label
        htmlFor="numberInput"
        className="text-gray-200 cursor-pointer"
      >
        Numbers
      </label>

    </div>


    {/* Characters */}
    <div className="flex items-center gap-3">

      <input
        type="checkbox"
        defaultChecked={isCharacterAllowed}
        id="CharInput"
        className="w-5 h-5 accent-blue-500 cursor-pointer"
        onChange={(e) => {
          setIsCharacterAllowed((prev) => !prev)
        }}
      />

      <label
        htmlFor="CharInput"
        className="text-gray-200 cursor-pointer"
      >
        Characters
      </label>

    </div>

  </div>

</div>
    </>
  )
}

export default App
