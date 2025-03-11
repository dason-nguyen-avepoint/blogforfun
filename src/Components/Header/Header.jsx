import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Navbar />
        <Logo />
        <button className="contact-btn">CONTACT</button>
      </nav>
    </header>
  );
};

export default Header;
