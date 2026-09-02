import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div
      className="fixed inset-0 w-full h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2
                      w-[95%] max-w-4xl
                      flex flex-wrap justify-center items-center gap-3
                      p-4
                      bg-white/90 backdrop-blur-md
                      rounded-2xl shadow-2xl border border-gray-200">

        <button
          className="color-btn bg-red-500 hover:bg-red-600"
          onClick={() => setColor('red')}
        >
          Red
        </button>

        <button
          className="color-btn bg-blue-500 hover:bg-blue-600"
          onClick={() => setColor('blue')}
        >
          Blue
        </button>

        <button
          className="color-btn bg-yellow-400 hover:bg-yellow-500"
          onClick={() => setColor('yellow')}
        >
          Yellow
        </button>

        <button
          className="color-btn bg-green-500 hover:bg-green-600"
          onClick={() => setColor('green')}
        >
          Green
        </button>

        <button
          className="color-btn bg-black hover:bg-gray-800"
          onClick={() => setColor('black')}
        >
          Black
        </button>

        <button
          className="color-btn bg-orange-500 hover:bg-orange-600"
          onClick={() => setColor('orange')}
        >
          Orange
        </button>

        <button
          className="color-btn bg-purple-500 hover:bg-purple-600"
          onClick={() => setColor('purple')}
        >
          Purple
        </button>

      </div>
    </div>
  )
}

export default App