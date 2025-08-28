import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="w-20 h-15 rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 duration-200" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
          <button className="w-20 h-15 rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 duration-200" style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="w-20 h-15 rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-red-500 duration-200" style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="w-20 h-15 rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 duration-200" style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>Orange</button>
          <button className="w-20 h-15 rounded-full border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 duration-200" style={{backgroundColor:"grey"}} onClick={() => setColor("grey")}>Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
//Dell Inspiron 15 3584 (2019 model)