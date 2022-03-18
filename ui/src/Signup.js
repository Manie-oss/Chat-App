import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function SignUp() {

  const [details, setLoginDetails] = useState({
    username: "",
    phonenumber:"",
    password: ""
  });

  function changedName(e){
    setLoginDetails({...details, username:e.target.value});
  }

  function changedNumber(e){
    setLoginDetails({...details, phonenumber:e.target.value});
  }

  function changedPassword(e){
    setLoginDetails({...details, password:e.target.value});
  }

  function createAccount(logincredentials){
    axios.post("http://localhost:8080/newaccount", logincredentials)
    .then((response) => 
      setLoginDetails(() => ({
        ...details,
        resback: response.data,
     }))
    )
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className = "loginContainer">
          <span>SignUp</span>
          <input type = "text" placeholder = "username" onChange = {changedName} ></input>
          <input type = "number" placeholder = "phonenumber" onChange = {changedNumber} ></input>
          <input type = "password" placeholder = "password" onChange = {changedPassword} ></input>
          <button className='signUp' onClick = {() => createAccount(details)}> Sign Up</button>
          <a className="signupButton" href="/">or Log In</a>
      </div>
    </>
  );
}

export default SignUp;
