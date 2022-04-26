import React from "react";
import "./login.css";
import {  NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ProfilePage from "../Profile-Page/ProfilePage";

const LoginPage = () => {
  document.title=`Conexi Login-Page`;
const[isLogin,setIsLogin]=useState(
 { login:false}
);
const[loginData,setLoginData]=useState({
  email:"",
  password:"",
});

const handleChange=(e)=>{
 setLoginData({...loginData,[e.target.name]:e.target.value});
}

const submitHandle=e=>{
  e.preventDefault();

  axios.post("http://taxi-booking-app.herokuapp.com/api/user/login",loginData)
  .then((response)=>{
    console.log(response);
    if(response.data==="User Password Not MAtch"){
      toast.error("User and Password does not matched!!")
    }
    else if(response.data==="Email Not Matched"){
      toast.error("User and Password does not matched!!")
    }
    else{
      toast.success("Login Successfully")
      localStorage.setItem("Login Token",response.data.token)
      setIsLogin({login:true})
    }
  }).catch((error)=>{
    console.log(error)
    toast.error("User and Password does not match")
  })
}


const token= localStorage.getItem('Login Token');
    // console.log(token)
    if(token===null){
     isLogin.login=false
    }
    else{
      isLogin.login=true
    }

const{email,password}=loginData
  return (
    <>
{
   isLogin.login===false ?
<>
<section className="login  PageBody ">
        <form className="loginForm mx-auto" onSubmit={submitHandle}>
          <div className="formText">
            <h1>Sign In</h1>
            <p>Login to your account</p>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="Password1" name="password" value={password} onChange={handleChange}  />
          </div>
          <button type="submit" className="btn login-button">
            Login
          </button>
          <div className="reg">
            <p className="regPara" id="regPara">
              Don't have an account??
              <NavLink to="/Register" className="regLink">
                <span> Register Here</span>{" "}
              </NavLink>{" "}
            </p>
          </div>
        </form>
      </section>
      </>
      :
    <ProfilePage login={isLogin.login}/> 
}
      
      <ToastContainer />
    </>
  );
};

export default LoginPage;
