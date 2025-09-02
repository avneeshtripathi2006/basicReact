function Box(props) {
    return (
        <div className="min-h-[15vmin] min-w-[65vmin] bg-white border-2 rounded-[7px] shadow-lg flex flex-col justify-evenly">
            <div className="flex flex-row justify-around items-center">
                <label htmlFor="propid">{props.id}</label>
                <label htmlFor="code">Currency Type</label>
                
            </div>
            <div className="flex flex-row justify-around items-center">
                <input id="propid" type="number" defaultValue={0} className="w-[10vmin]"></input>
                <select id="code"></select>
            </div>
        </div>
    );
}
export default Box