
import React ,{useState}from "react";
import './in.css'
import { Link,Navigate,useNavigate} from 'react-router-dom';
function Login(){
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")
  const navigate=useNavigate();
    //const[errors,setErrors]=useState("")
    const logInformation=(event)=>{
        event.preventDefault();
        //validate(phone,password)
        const stored=JSON.parse(localStorage.getItem('phone'))||[]
        const storeed=JSON.parse(localStorage.getItem('email'))||[]
        const store=JSON.parse(localStorage.getItem('password'))||[]
        let userId=-1
        let isPhone=false;
        let isEmail=false;
        const Phonereg=/^\d+$/
        const Emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const normalizedPhone = phone.startsWith('+233') ? phone : '+233' + phone.slice(1);
       if(Phonereg.test(phone)){
        isPhone=true
        userId=stored.indexOf(normalizedPhone)
       }else if(Emailreg.test(phone)){
            isEmail=true
            userId=storeed.indexOf(phone)
        }


        if(userId!==-1 && store[userId]===password)
        {setMessage("Login was successful!!")
            localStorage.setItem('currentEmail',storeed[userId])
            navigate("/landing");
        }else{setMessage("Incorrect credentials.Please try again!")}

        setPhone("");
        setPassword("");
        
    }
     return (
        <div className="loginContainer">
            <h1>Login Page</h1>
            <form onSubmit={logInformation}>
            <label>
                Phone number/Email:
                <input type="text"
                value={phone}
                  placeholder="Phone number/Email"
                onChange={(e)=>setPhone(e.target.value)} required/>
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
          <button  type="submit">Log In</button> 
            <p>Don't have an account? <Link to="/">Sign Up!</Link></p>
            </form>
            {message &&<p>{message}</p>}
        </div>
    )
}
export default Login
