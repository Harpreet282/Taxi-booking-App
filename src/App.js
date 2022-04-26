import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import LoginPage from "./Components/Login/LoginPage";
import RegistrationPage from "./Components/Registration/RegistrationPage";
import BookingPage from "./Components/Booking/BookingPage";
import ProfilePage from "./Components/Profile-Page/ProfilePage";
import Logout from "./Components/Logout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
