import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-no-background.png";
import arrowIcon from "../../assets/arrow_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <img src={arrowIcon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
