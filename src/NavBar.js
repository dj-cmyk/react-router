import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/" className="NavBar">
        Home
      </NavLink>
      <NavLink exact to="/chips" className="NavBar">
        Chips
      </NavLink>
      <NavLink exact to="/soda" className="NavBar">
        Soda
      </NavLink>
      <NavLink exact to="/chocolate" className="NavBar">
        Chocolate
      </NavLink>
    </nav>
  );
}

export default NavBar;