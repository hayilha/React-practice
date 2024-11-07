import React from "react";
import { useState,useEffect } from "react";


function DigitalClock(){
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
        const interValid=setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(interValid)
        }
    }
,[])
function formatTime(){
    let hours=time.getHours()
    const minutes=time.getMinutes()
    const seconds=time.getSeconds()
    const meridian=hours>=12?"PM ":"AM"
    hours=hours%24 ;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridian)}`
}
function padZero(number){
return( number<10?"0":"")+number;
}
return(
   <div className="apples">
<div className="grapes">
<span>{formatTime()}</span>
</div>
   </div>
)
}
export default DigitalClock;