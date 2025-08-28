import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeCharacters, setIncludeCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) chars += "0123456789"
    if (includeCharacters) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    let password = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      password += chars[randomIndex]
    }
    setPassword(password)
  }, [length, includeNumbers, includeCharacters, setPassword])
  useEffect(() => {
    passwordGenerator()
  },[length, includeNumbers, includeCharacters, passwordGenerator])
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99999)
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className="min-w-[40vw] min-h-[20vh] w-fit h-fit border-8 border-black-400 m-auto" style={{ backgroundColor: "orange" }}>
      <div className="flex flex-row justify-center mt-[10px]">
        <input type="text" value={password} placeholder="Password" readOnly ref={passwordRef} className="min-w-[25vw] min-h-[5vh] border-0 rounded-tl-[7px] rounded-bl-[7px]" style={{ backgroundColor: "white" }}></input>
        <button onClick={copyPasswordToClipboard} className="min-w-[5vw] min-h-[5vh] rounded-tr-[7px] rounded-br-[7px] flex flex-row justify-center items-center" style={{ backgroundColor: "blue" }}>Copy</button>
      </div>
      <div className="flex flex-row justify-center items-center mt-[15px]">
        <input id="range" type="range" min="8" max="35" value={length} onChange={(e) => { setLength(Number(e.target.value)) }} className="w-[11vw]"></input>
        <label htmlFor="range" className="ml-[4px]">Length({length})</label>
        <input id="numcheck" type="checkbox" onChange={() => { setIncludeNumbers((prev) => !prev) }} className="ml-[10px]"></input>
        <label htmlFor="numcheck" className="ml-[4px]">Numbers</label>
        <input id="charcheck" type="checkbox" onChange={() => { setIncludeCharacters((prev) => !prev) }} className="ml-[10px]"></input>
        <label htmlFor="charcheck" className="ml-[4px]">Characters</label>
      </div>
    </div>
  )
}
export default App