import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

export default function Footer() {
  return (
      <footer className="footer">
        <div>
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="news"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Новости
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className="bottom">
            <p>Lorem ipsum dolor sit..</p>
          </div>
        </div>
      </footer>
  )
}
