import React from 'react'

function Greeting() {
    const name="John"
    const date=new Date()

    
  return (
    <div> 
        <h1>name: {name}</h1>
        <p> date: {date.getDate()}</p>
    </div>
  )
}

export default Greeting