import React from "react";
import { useState } from "react";

function Statein(){
//update array of objects in state
const[cars,setCars]=useState([])
const[carYear,setcarYear]=useState(new Date().getFullYear())
const[carMake,setcarMake]=useState("")
const[carModel,setcarModel]=useState("")

function handleAdd(){
const newCar={
    year:carYear,
    make:carMake,
    model:carModel
}
    setCars(c => [...c,newCar]);
setcarYear(new Date().getFullYear())
setcarMake("")
setcarModel("")
}
function handleRemove(index){//the filter function returns two parameters element and index.but because we've already called index we'll make it i
setCars(c=>c.filter((element,i)=>i !==index))
}
function handleYearChangee(event){
setcarYear(event.target.value)
}
function handleMakeChangee(event){
    setcarMake(event.target.value)   
}
function handleModelChangee(event){
    setcarModel(event.target.value)
}
    return(
        <>
        <h2>LIST OF CAR OBJECTS</h2>
        <ul>
            {cars.map((car,index)=>//if you call handleRemove and pass a function at once it'll call the function at once so you have to assign it to a function
            <li key={index} onClick={()=>handleRemove(index)}> {car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChangee}/><br/>
        <input type="text" value={carMake} onChange={handleMakeChangee} placeholder="Please enter car make"/><br/>
        <input type="text" value={carModel} onChange={handleModelChangee} placeholder="Please enter car model"/><br/>
        <button onClick={handleAdd}>Add Car</button>
       

        </>
    )
}
export default Statein