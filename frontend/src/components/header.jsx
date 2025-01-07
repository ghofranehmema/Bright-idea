import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import a from "../components/login/idea.png"

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo">
  <img src={a} alt="Bright Idea Logo" className="logo" />
  <h1 className="logo-text">Bright Idea</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
         <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>  {/* Utilisation de Link pour naviguer vers Login */}
        <Link to="/register" className="signup-btn">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
