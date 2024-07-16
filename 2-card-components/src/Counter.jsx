import React,{useSet, useState} from "react"
function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        // c= prevCount
        setCount(prevCount=>prevCount + 1); 
        setCount(prevCount=>prevCount + 1);
        setCount(prevCount=>prevCount + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const reset =() =>{
        setCount(0);
    }

    return(<div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={decrement}> Decrement</button>
            <button className="counter-button" onClick={increment}> Increment</button>
            <button className="counter-button" onClick={reset}> Reset</button>
        </div>)
}


export default Counter