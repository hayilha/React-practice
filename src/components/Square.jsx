import React from "react";
import { useState } from "react";
 function Square({value,OnhandleClick}){
/*const [value,setValue]=useState(null)
    function handleClick(){
       setValue('X');
    }*/
    return <button className="square" onClick={OnhandleClick}>{value}</button>
 }
 export default Square