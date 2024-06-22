import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import logoutIcon from "../assets/logout.png";
import loginIcon from "../assets/login.png";
import homeIcon from "../assets/home.png";
import productsIcon from "../assets/products.png";
import aboutIcon from "../assets/about.png";
import contactIcon from "../assets/contact.png";
import "./Navbar.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert token to boolean
  }, [location]); // Re-run the effect when location changes

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    // Update authentication state
    setIsAuthenticated(false);
    // Navigate to login page
    navigate("/");
  };

  const renderLoginLogoutIcon = () => {
    if (isAuthenticated) {
      return (
        <img
          src={logoutIcon}
          className="navbar-icon"
          alt="Logout"
          onClick={handleLogout}
        />
      );
    } else if (location.pathname !== "/login") {
      return (
        <Link to="/login">
          <img src={loginIcon} className="navbar-icon" alt="Login" />
        </Link>
      );
    }
    return null;
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="navbar-center">
        <Link to="/">
          <img src={homeIcon} className="navbar-icon" alt="Home" />
        </Link>
        <Link to="/products">
          <img src={productsIcon} className="navbar-icon" alt="Products" />
        </Link>
        <Link to="/about">
          <img src={aboutIcon} className="navbar-icon" alt="About" />
        </Link>
        <Link to="/contact">
          <img src={contactIcon} className="navbar-icon" alt="Contact" />
        </Link>
      </div>
      <div className="navbar-right">
        {renderLoginLogoutIcon()}
      </div>
    </div>
  );
};

export default Navbar;
