import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card1 username="ullu" txtBtn='visit me'/>
      <Card1 username="Tiger" txtBtn="click me"></Card1>
    </>
  )
}

export default App
