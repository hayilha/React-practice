//how to update the state of an array 
import React from "react";
import { useState } from "react";
function State(){
const[foods,setFoods]=useState(["apple","orange","banana"])

function handleFood(){
const newFood=document.getElementById("food").value
document.getElementById("food").value=""
setFoods(f=>[...f,newFood])
}

function removeFood(index){
setFoods(foods.filter((element,i)=>i !==index))
}
    return(<>
    <h2>LIST OF FOODS </h2>
   <ul>
    {foods.map((food,index)=>
    <li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
   </ul>
   <input type="text" id="food" placeholder="Enter food name"/>
   <button onClick={handleFood}> Add Food</button>
    </>)
}
export default State;