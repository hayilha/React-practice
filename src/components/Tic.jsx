import React, { useState } from "react"
import Square from "./Square"
function Tic() {
    const[squares,setSquares]=useState(Array(9).fill(null))
    function handleClick(i){
        const nextSquares=squares.slice();
        nextSquares[i]="X"
        setSquares(nextSquares);
    }
    return (
    <>
    <div className="board-row">
   <Square value={squares[1]} onhandleClick={handleClick}/>
   <Square value={squares[2]}/>
   <Square value={squares[3]}/>
    </div>
    <div className="board-row">
    <Square value={squares[4]} />
    <Square value={squares[5]}/>
    <Square value={squares[6]}/>
    
    </div>
    <div className="board-row">
    <Square value={squares[7]}/>
    <Square value={squares[8]}/>
    <Square value={squares[9]}/>
    </div>
    </>)
  }
  export default Tic