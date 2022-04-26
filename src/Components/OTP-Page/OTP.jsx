import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./otp.css"
import { Navigate } from 'react-router-dom';

const OTP = (props) => {
    const[verify,setVerify]=useState(false);
    const[state,setState]=useState({
        phoneNumber:props.correctPhoneNumber,
        otpCode:"",
    })

    const chaneHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
      };
    
    const otpSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        axios
          .post("http://taxi-booking-app.herokuapp.com/api/user/verifyotp", state)
          .then((response) => {
            console.log(response);
            if(response.data.Result==="You are verify successfully"){
                toast.success("Sign-up Successfully!");
                setVerify(true)
            }

           else{
                toast.error("Incorrect Otp Please fill again correct Otp")
            }           
          })
    
          .catch((error) => {
            console.log(error);
            toast.error("Error!");
          });
      };
    
      const {phoneNumber,otpCode } = state;
  return (
     <>
      {
          verify===false ?
          <div>
          <div className='otpPage PageBody'>
          <form onSubmit={otpSubmit} className="otpForm mx-auto">
          <div className="otpFormText">
            <h1>Verification</h1>
            <p>Please varify your account with the OTP we sent to {props.correctPhoneNumber} number</p>
          </div>
   <div className="form-group">
     <label htmlFor="phoneNumber1">Phone Number</label>
     <input type="text" className="form-control" value={phoneNumber}  name="phoneNumber" onChange={chaneHandler}
             id="phoneNumber1" aria-describedby="emailHelp"/>
   </div>
   <div className="form-group">
     <label htmlFor="otpCode">Fill OTP</label>
     <input type="text" className="form-control"  name="otpCode"
              value={otpCode}
              onChange={chaneHandler} id="otpCode"/>
   </div>
   <button type="submit" className="btn otp-button">
            Submit
          </button>
 </form>
 <ToastContainer />
     </div>
          </div>
          :
          <div>
    <Navigate to='/login'  /> 
          </div>
      }
     </>
    
  )
}

export default OTP