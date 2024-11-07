// Mod2.js
import React, { useContext } from "react";
import Mod3 from "./Mod3";  
import { UserContext } from "./Mod";

function Mod2() {
  const user=useContext(UserContext)
  return (
    <div className="boxie">
      <h1>Component B</h1>
      <h2>{`Hello again ${user}`}</h2>
      <Mod3 /> 
    </div>
  );
}

export default Mod2;
