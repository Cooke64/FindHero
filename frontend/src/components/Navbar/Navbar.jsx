import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useHistory ,useLocation } from 'react-router-dom';
import { Link as NavLink} from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false)
  const location = useLocation()
  

  const getHeaderClass = () => {
    if (location.pathname.indexOf('news') > 0){
        return 'over_header'
    } else {
      if (color) {
        return 'header header_bg'
      } else {
        return 'header'
      }
    }
  }

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <header className={getHeaderClass()}>
      <nav className="navbar">
        <NavLink
          to="/"
          className="header_logo"
          style={{ cursor: "pointer" }}
        >
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
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              О нас
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Новости
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="question"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Вопросы и ответы
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
