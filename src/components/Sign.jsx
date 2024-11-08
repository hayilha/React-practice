import React, { useState } from "react";
import './in.css';
import { Link } from 'react-router-dom';
import "react-phone-number-input/style.css"
import PhoneInput from 'react-phone-number-input'
function Sign() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const logInformation = (event) => {
    event.preventDefault();

    const validateErrors = validate(phone, email, password);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
    
      const exiPho = JSON.parse(localStorage.getItem('phone')) || [];
      const exiPas = JSON.parse(localStorage.getItem('password')) || [];
      const exiEm = JSON.parse(localStorage.getItem('email')) || [];

     
      if (exiPho.includes(phone)) {
        setMessage("Phone number already registered. Please try again.");
        return;
      } else if (exiPas.includes(password)) {
        setMessage("Password already taken. Please try again.");
        return;
      } else if (exiEm.includes(email)) {
        setMessage("Email has already been used. You might already have an account. Try logging in!");
        return;
      }

   
      exiPho.push(phone);
      exiPas.push(password);
      exiEm.push(email);

      localStorage.setItem('phone', JSON.stringify(exiPho));
      localStorage.setItem('password', JSON.stringify(exiPas));
      localStorage.setItem('email', JSON.stringify(exiEm));

      setPhone("");
      setPassword("");
      setEmail("");

      setMessage("You have successfully signed up. Kindly log in now.");
      setTimeout(() => {
        setMessage("");
      }, 8000);
    } else {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setErrors({});
        setIsButtonDisabled(false);
      }, 5000);
    }
  };
   //Json.PARSE is (for getItem)used to convert a object,array back to its original way when retrieving it from the local storage because the local storage takes only strings so when you're setting (setItem)arrays or objects use JSON.stringify.

  const validate = (phone, email, password) => {
    const error = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#^()$!%*?&]{8,}$/;
    //const phoneReg = /^\d+$/


    
    if (!phone) {
      error.phone = "Phone number is required";
    } else if (!phone.startsWith('+2')) {
      error.phone = "Please make sure you enter a valid phone number";
    }

    // Email validation
    if (!email) {
      error.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      error.email = "Please enter a valid email address";
    }

    // Password validation
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
          Phone number:
          <PhoneInput
          international 
          defaultCountry="GH"
            value={phone}
            placeholder="Phone number"
            onChange={setPhone} 
            required
          />
        </label>
        {errors.phone && <p className="errors">{errors.phone}</p>}

        <div>
          <label>
            Email:
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </label>
          {errors.email && <p className="errors">{errors.email}</p>}
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </label>
          {errors.password && <p className="errors">{errors.password}</p>}
        </div>

        <button 
          disabled={Object.keys(errors).length > 0 || isButtonDisabled} 
          type="submit"
        >
          Sign Up
        </button>

       <p>Already have an account?</p><Link to="/Login"> <p>Login!</p></Link>
       
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Sign;
