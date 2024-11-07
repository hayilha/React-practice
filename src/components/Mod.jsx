import React, { useState } from "react";
import Mod2 from "./Mod2";
function Mod(){
const[user,setUser]=useState("BroCode");
  return(
    <div className="boxie"> 
    <h1>Component A</h1>
    <h2>{`Hello${user}`}</h2>
    <Mod2 />
    </div>
  )
}
export default Mod;