import React from 'react'

function Practice({age}) {
  return <User  name={"lili"}age={age} isMarried={false} hobbies={["dancing","playing","singing","batting"]}/>
}
const User=({age,name,isMarried,hobbies})=>{
    return (<section>
<h1>Name: {name}</h1>
<h1>Age: {age}</h1>
<h1>isMarried: {isMarried}</h1>
<h1>Hobbies: {hobbies}</h1>
    </section>
)}
Practice.propTypes={

}
export default Practice