import { useRef,useState,useEffect } from "react";//useRef is also useful for storing values that change over time but don’t need to trigger a re-render.Usestate re-renders the component when the state value.useref is just used lightly to makechanges that don't need re-rendering.
import React from "react";
function Ref(){
const inputRef=useRef(null);

useEffect(()=>{
    console.log("apples")
},[])

function handleClick(){
   
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="yellow"
}
return(
    <>
    <button onClick={handleClick}>
        Click Me!
    </button>
    <input ref={inputRef}/>
    </>
)
}
export default Ref;