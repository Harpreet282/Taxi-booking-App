import React, { useState } from "react";
import "./registration.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import OTP from "../OTP-Page/OTP";

const RegistrationPage = () => {
  document.title = `Conexi Registration-Page`;

  const [isReg,setIsReg]=useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    roles: "",
    pImage:"",
  });

  const chaneHandler = (e) => {
    // console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://taxi-booking-app.herokuapp.com/api/user/signup", data)

      .then((response) => {
        console.log(response);
        if(response.data==="Email Already Exist"){
          toast.error("Email already exist!");
          setIsReg(true);
        }
        else if(response.data==="Invalid Role"){
          toast.error("Please select the role!");
        }
        else if(response.data==="Number Already Exist"){
          toast.error("Number Already Exist");
        }
       else{
        toast.success("Sign-up Successfully!");
        setIsReg(true);
       }
        
      })

      .catch((error) => {
        console.log(error);
        toast.error("Error!");
      });
  };

  const { fname, lname, email, phoneNumber, password, roles,pImage } = data;

  return (
    <>
     {
      
       isReg===false ?
       <div>
       <section className="register  PageBody ">
       <form className="registerForm mx-auto" onSubmit={submitHandler}>
         <div className="registerformText">
           <h1>Sign Up</h1>
           <p>create a new account</p>
         </div>
         <div className="form-group">
           <label htmlFor="fname">First Name</label>
           <input
             type="text"
             className="form-control"
             name="fname"
             value={fname}
             onChange={chaneHandler}
             id="fname"
           />
         </div>
         <div className="form-group">
           <label htmlFor="lname">Last Name</label>
           <input
             type="text"
             className="form-control"
             name="lname"
             value={lname}
             onChange={chaneHandler}
             id="lname"
           />
         </div>
         <div className="form-group">
           <label htmlFor="email">E-mail</label>
           <input
             type="email"
             className="form-control"
             name="email"
             value={email}
             onChange={chaneHandler}
             id="email"
           />
         </div>
         <div className="form-group">
           <label htmlFor="phoneNumber">Phone Number</label>
           <input
             type="text"
             className="form-control"
             name="phoneNumber"
             value={phoneNumber}
             onChange={chaneHandler}
             id="phoneNumber"
           />
         </div>
         <div className="form-group">
           <label htmlFor="password">Password</label>
           <input
             type="password"
             className="form-control"
             name="password"
             value={password}
             onChange={chaneHandler}
             id="password"
           />
         </div>
         <div className="form-group">
           <label htmlFor="roles">Role</label>
           <select
             className="form-control"
             name="roles"
             value={roles}
             onChange={chaneHandler}
             id="roles"
           >
             <option value="">--select--</option>
             <option value="driver">Driver</option>
             <option value="user">User</option>
           </select>
         </div>
         <div className="form-group">
   <label htmlFor="pImage">Image</label>
   <input type="file" accept="image/*" className="form-control-file" value={pImage} name="pImage" onChange={chaneHandler}  id="pImage"  />
 </div>

         <button type="submit" className="btn reg-button">
           Submit
         </button>
         <div className="log">
           <p className="loginPara" id="loginPara">
             Already have an account??
             <NavLink to="/Login" className="logLink">
               <span> Login Here</span>{" "}
             </NavLink>{" "}
           </p>
         </div>
       </form>
     </section>
     <ToastContainer />
     </div>
     :
     <div>
     <OTP correctPhoneNumber={data.phoneNumber} />
     </div>
     }
    </>
  );
};

export default RegistrationPage;
