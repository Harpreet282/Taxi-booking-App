import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaGlobe, FaUserAlt, FaTaxi } from "react-icons/fa";
const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg headerComponent px-5 fixed-top">
        <a href="#home" className="navbar-brand">
          <div className="header-logo-img navbar-brand">
            <img
              src="https://727512.smushcdn.com/2595216/wp-content/themes/conexi/assets/images/logo.png?lossy=1&strip=1&webp=1"
              alt="logo"
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink to="/" className="nav-link listItems">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link listItems">
                <FaGlobe /> About
              </NavLink>
            </li>
           
            { localStorage.getItem("Login Token") === null ?
            <li>
              <NavLink to="login" className="nav-link listItems">
                <FaUserAlt /> Login
              </NavLink>  </li>
              :
              <>
              <li>
              <NavLink to="/booking" className="nav-link listItems">
                <FaTaxi /> Booking
              </NavLink>
            </li>
            <li>
            <NavLink to="/profile" className="nav-link listItems">
                <FaUserAlt /> Profile
              </NavLink>
            </li>
            {/* <li>
            <NavLink to="/logout" className="nav-link listItems">
                <FaUserAlt /> Logout
              </NavLink>
            </li> */}
            
            </>

}
            
          
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
