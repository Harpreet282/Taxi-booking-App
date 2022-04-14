import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <section className="login  PageBody ">
        <form className="loginForm mx-auto">
          <div className="formText">
            <h1>Sign In</h1>
            <p>Login to your account</p>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="Password1">Password</label>
            <input type="password" className="form-control" id="Password1" />
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
  );
};

export default LoginPage;
