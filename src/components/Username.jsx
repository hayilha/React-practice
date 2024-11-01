import React from 'react'

function Username(props){
    return (<div>
          <b style={{
            fontSize:"22px",
            color:"blue"
          }}>Username:</b>
          <span>{props.Username}</span>
    </div>
)}
export default Username;