import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  }
  const subsValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hello React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subsValue}>Subtract Value : {counter}</button>
    </>
  );
}

export default App
