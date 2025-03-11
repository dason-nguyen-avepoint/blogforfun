import React from "react";
import "./Header.css";
const Navbar = () => {
  return (
    <ul className="nav-links">
      <li>
        <a href="#">HOME</a>
      </li>
      <li>
        <a href="#">WORK</a>
      </li>
      <li>
        <a href="#" className="active">
          BLOG
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
