import { useState, useEffect } from 'react'
import './App.css'
import Box from './components/Box'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result, setResult] = useState(0)
  const [autoConvert, setAutoConvert] = useState(false);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);

    let tempAmount = amount;
    setAmount(result);
    setResult(tempAmount);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    if (rate) {
      if (amount === "") {
        setResult(0);
      } else {
        setResult(rate * Number(amount));
      }
    }
  };


  useEffect(() => {
    if (autoConvert) {
      const rate = currencyInfo[to];
      if (rate) {
        if (amount === "") {
          setResult(0);  // input blank ho → result 0
        } else {
          setResult(rate * Number(amount));
        }
      }
    }
  }, [amount, from, to, currencyInfo, autoConvert]);


  return (
    <div className="min-h-[50vmin] min-w-[75vmin] bg-slate-300 border-[5px] border-slate-500 rounded-[20px] glass flex flex-col justify-center items-center gap-[2vmin] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]">
      <div className="relative flex flex-col justify-center items-center gap-[2vmin]">
        <Box label="From" amount={amount} currencyoptions={options} onCurrencyChange={(currency) => setFrom(currency)} onAmountChange={(amount) => setAmount(amount)} selectCurrency={from} />
        <Box label="To" amount={result} currencyoptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisabled />
        <button onClick={swap} className="min-w-[5vmin] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-blue-700 text-white rounded">Swap</button>
      </div>
      <button onClick={convert} disabled={autoConvert} className="min-w-[65vmin] min-h-[7vmin] bg-blue-700 text-white font-bold">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <label htmlFor="autoConvert" className="font-semibold">Auto Convert</label>
        <input id="autoConvert" type="checkbox" checked={autoConvert} onChange={() => setAutoConvert(prev => !prev)} className="w-6 h-3 accent-blue-700 cursor-pointer"/>
      </div>

    </div>
  )
}

export default App
