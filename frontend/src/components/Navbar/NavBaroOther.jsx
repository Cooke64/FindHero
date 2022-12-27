import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBaroOther() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    <header className="over_header">
      <nav className="navbar">
        <NavLink to="/" className="header_logo" style={{ cursor: "pointer" }}>
          #Heroes_64
        </NavLink>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" style={{ cursor: "pointer" }}
            >
              Главная
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
