import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo2png.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
