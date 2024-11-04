
import React ,{useState}from "react";
function Login(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")

    const logInformation=(event)=>{
        event.preventDefault();
console.log("Username:",username)
console.log("Password:",password)
setUsername("");
setPassword("");
    }


    
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={logInformation}>
            <label>
                Username:
                <input type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)} required/>
            </label>
            <div>
            <label>
                Password:
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} required/>
            </label>
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login