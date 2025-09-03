import { useId } from "react"

function Box({label , amount , onAmountChange , currencyoptions = [] , onCurrencyChange , selectCurrency="usd" , amountDisabled=false , currencyDisabled=false , classname=""}) {
    const amountInputId=useId();
    const selectId=useId();
    return (
        <div className="min-h-[15vmin] min-w-[65vmin] bg-white border-2 rounded-[7px] shadow-lg flex flex-col justify-evenly">
            <div className="flex flex-row justify-around items-center">
                <label htmlFor={amountInputId}>{label}</label>
                <label htmlFor={selectId}>Currency Type</label>
                
            </div>
            <div className={`flex flex-row justify-around items-center ${classname}`}>
                <input id={amountInputId} type="number" placeholder="Amount" value={amount} disabled={amountDisabled}    onChange={(e)=> onAmountChange && onAmountChange(e.target.value)} className="w-[10vmin]"></input>
                <select id={selectId} value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisabled} className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                    {currencyoptions.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))}
                </select>
            </div>
        </div>
    );
}
export default Box