import { useContext } from "react"
import { UserContext } from "./Mod"
import React from "react";

const Mod3 = () => {
    const user=useContext(UserContext);
  return (
    <div className="boxie"> 
    <h1>Component C</h1>
    <h2>{`Bye ${user} `}</h2>
    </div>
  )
}

export default Mod3