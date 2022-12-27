import React from "react";
import cls from "./About.module.css";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsCardHeading, BsChatSquareText } from "react-icons/bs";


export default function About() {
  return (
    <>
      <div className="_container bg_grey" id="about">
        <div className="title_block">
          <h2>О нашем проекте</h2>
        </div>
        <p></p>
        <div className="row">
          <div className={cls.cols}>
            <div className={cls.icon}>
              <AiOutlineFileDone />
            </div>
            <h3>Наша цель.</h3>
            <p>
              Это увековечение памяти защитников Отечества, воспитание чувства
              гордости, уважения к героическому прошлому своей страны и малой
              родины.
            </p>
          </div>
          <div className={cls.cols}>
            <div className={cls.icon}>
              <BsCardHeading />
            </div>
            <h3>Задачи проекта.</h3>
            <p>
              Вовлечение школьников и студентов в поисковую работу по сбору
              информации о земляках-участниках Великой Отечественной войны. Для
              учащихся школ, техникумов, колледжей, вузов это возможность стать
              соавторами электронной Книги Памяти Саратовской области, внести
              реальный вклад в увековечение памяти Героев.
            </p>
          </div>
          <div className={cls.cols}>
            <div className={cls.icon}>
              <BsChatSquareText />
            </div>
            <h3>Информационное сопровождение проекта </h3>
            <p>
              Имена самых активных участников проекта прозвучат в публикациях на
              информационном портале 
              <a href="http://книгапамяти64.рф">«Книга Памяти Саратовской области»</a>,  
              <a href="http://sarnovosti.ru" target="_blank" rel="noopener noreferrer">«Регион 64»</a>
              , в «Саратовской
              областной газете «Регион 64».
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
