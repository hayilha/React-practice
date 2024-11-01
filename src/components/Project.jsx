import React from 'react'

function Project() {
    const product=[
        {id:1,
        name:"laptop",
        state:"old",
        colour:"yellow"},
        {
            id:2,
        name:"lapi",
        state:"new",
        colour:"blue"

        },
        {
            id:3,
        name:"lapo",
        state:"neww",
        colour:"bluee"

        }
    ]
    

    
    const numbers=[1,4,6,7,4,3]
  return (
    product.map((item)=>{
        return(
<div key={item.id}>
        <b>id:</b>
        <span>{item.id}</span>
        <b>name:</b>
        <span>{item.name}</span>
        <b>state:</b>
        <span>{item.state}</span>

           
        
           
    </div>
        )
    })
    
  )
}

export default Project