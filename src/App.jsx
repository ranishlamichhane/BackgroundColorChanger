import { useState } from 'react'
import React from 'react'

function App() {
  const [color, setColor] = useState("grey")
  return (
    <div className="w-ful h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex  flex-wrap  justify-center items-center right-0.5 left-0">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg cursor-pointer'
            style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("skyblue")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "skyblue" }}>Skyblue</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("white")} className='border-2 px-4 py-1 rounded-2xl text-black shadow-lg cursor-pointer'
            style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer'
            style={{ backgroundColor: "black" }}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
