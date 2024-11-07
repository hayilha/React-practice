
import React ,{useState}from "react";
import './in.css'
function Login(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
  
    const[errors,setErrors]=useState("")
    const logInformation=(event)=>{
        event.preventDefault();
        validate(username,password)
        const stored=localStorage.getItem('username')
        const store=localStorage.getItem('password')
        if(username===stored && password===store){
            setMessage("Login Successful")
        }else{
            setMessage("Invalid credentials.Kindly try again")
        }
        setUsername("");
        setPassword("");
    }
const validate=(values)=>{

}

    
    return (
        <div className="loginContainer">
            <h1>Login Page</h1>
            <form onSubmit={logInformation}>
            <label>
                Username:
                <input type="text"
                value={username}
                  placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)} required/>
            </label>
            <div>
            <label>
                Password:
                <input type="password"
                value={password}
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)} required/>
            </label>
            </div>
            <button  type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Login
