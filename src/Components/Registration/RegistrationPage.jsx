import React from "react";
import "./registration.css";
import { NavLink } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <>
      <section className="register  PageBody ">
        <form className="registerForm mx-auto">
          <div className="registerformText">
            <h1>Sign Up</h1>
            <p>create a new account</p>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="Password1">Password</label>
            <input type="password" className="form-control" id="Password1" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
            />
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
    </>
  );
};

export default RegistrationPage;
