
import React ,{useState}from "react";
import './in.css'
//import Login from "./Login";
function Sign(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[errors,setErrors]=useState({})
    const [message, setMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const logInformation = (event) => {
        event.preventDefault();
      
     
        const validateErrors = validate(username, email, password);
        setErrors(validateErrors);
      
 
        if (Object.keys(validateErrors).length === 0) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          localStorage.setItem('email', email);
      
        
          setUsername("");
          setPassword("");
          setEmail("");
      
          setMessage("You have successfully signed up. Kindly log in now.");
          setTimeout(()=>{
            setMessage("")
          },8000)
        } else {
         
          setIsButtonDisabled(true);
      
          
          setTimeout(() => {
            setErrors({});
            setIsButtonDisabled(false);
          }, 5000);
        }
      };
      
    const validate = (username, email, password) => {
        const error = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       const usernameReg=/^[A-Za-z]+$/

        
        if (!username) {
          error.username = "Username is required";
        }else if(!usernameReg.test(username)){
            error.username="Please make sure you enter only letters"
        }
 
        if (!email) {
          error.email = "Email is required";
        } else if (!emailRegex.test(email)) {
          error.email = "Please enter a valid email address";  
        }
      
        
        if (!password) {
          error.password = "Password is required";
        } else if (!passwordRegex.test(password)) {
          error.password = "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.";
        }
      
        return error;
      };
    return (
        <div className="loginContainer">
            <h1>Sign Up Page</h1>
            <form onSubmit={logInformation}>
            <label>
                Username:
                <input type="text"
                value={username}
                  placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)} required/>
            </label>
            {errors.username &&<p className="errors">{errors.username}</p>}
            <div>
            <label>Email:
                <input type="text"
                value={email}
                  placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)} required/>
            </label>
            {errors.email &&<p className="errors">{errors.email}</p>}
            </div>
            <div>
            <label>
                Password:
                <input type="password"
                value={password}
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)} required/>
            </label>
            {errors.password &&<p className="errors">{errors.password}</p>}
            </div>
            <button disabled={Object.keys(errors).length>0} type="submit">Sign Up</button>
            <button>Log in</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}
export default Sign