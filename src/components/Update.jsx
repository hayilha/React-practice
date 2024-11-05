import React, { useState } from "react";
//updater function=allows for safe updates based on the previos state
function Update(){
    const [count,setCount]=useState(0)
    function increment()
    {
       setCount(prev=>prev+1) 
       setCount(prev=>prev+1) 
       setCount(prev=>prev+1) 
    }

    function dec(){
        setCount(prev=>prev-1)
        setCount(prev=>prev-1)
        setCount(prev=>prev-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increament</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Update