import React from "react";
import profile from "../../images/profile.png";
import "./AboutMe.css";

export function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <hr className="about-me__divider" />
      <div className="about-me__info">
        <p className="about-me__info-name">ИМЯ</p>
        <p className="about-me__info-description">
          Фронтенд-разработчик, 30 лет
        </p>
        <p className="about-me__info-additional">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/daria-lgtn"
          className="about-me__info-link"
        >
          Github
        </a>
        <img className="about-me__info-image" src={profile} alt="profile" />
      </div>
    </section>
  );
}
