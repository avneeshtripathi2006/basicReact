import { useState } from 'react'
import './App.css'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-[50vmin] min-w-[75vmin] bg-slate-300 border-[5px] border-slate-500 rounded-[20px] opacity-70 flex flex-col justify-center items-center gap-[2vmin] shadow-[40px_40px_60px_#bebebe,-40px_-40px_60px_#ffffff]">
      <Box id="From"/>
      <Box id="To"/>
      <button className="min-w-[65vmin] min-h-[7vmin] bg-blue-700 text-white font-bold">Convert</button>
    </div>
  )
}

export default App
