import React from "react";
import { Link } from "react-scroll";

import "./Hero.css";

export function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero__container">
        <h1>«Помоги найти героя!»</h1>
        <p>
          Совместный проекта регионального министерства информации и массовых
          коммуникаций, электронной Книги Памяти<br/> и благотворительного фонда
          «Неравнодушные сердца».
        </p>
        <div className="btn__alike">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            О нас
          </Link>
        </div>
      </div>
    </div>
  );
}
