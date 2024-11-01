import React from 'react'
const ValidPassword=()=><h1>Valid Password</h1>
const InValidPassword=()=><h1>InValid Password</h1>

const Password=({isValid})=>{
if(isValid){
    return<ValidPassword/>
}
return <InValidPassword/>
}
function Lion() {
  return (
    <section>
        <Password isValid={true}/>
    </section>
  )
}

export default Lion