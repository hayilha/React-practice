import React, { useState,createContext } from "react";
import Mod2 from "./Mod2";
//useContext allows you to share data globally, so any component can access it without having to pass it down manually.

export const UserContext=createContext()
function Mod(){
const[user,setUser]=useState("BroCode");
  return(
    <div className="boxie"> 
    <h1>Component A</h1>
    <h2>{`Hello ${user}`}</h2>
   
    <UserContext.Provider value={user}>
    <Mod2/>
 
    </UserContext.Provider>
    </div>
  )
}
export default Mod;