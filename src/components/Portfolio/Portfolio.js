import React from "react";
import "./Portfolio.css";

export function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        href="https://daria-lgtn.github.io/mesto/"
        target="_blank"
        rel="noreferrer"
        className="portfolio__info"
      >
        Статичный сайт
      </a>
      <hr className="portfolio__divider" />
      <a
        href="https://daria-lgtn.github.io/mesto/"
        target="_blank"
        rel="noreferrer"
        className="portfolio__info"
      >
        Адаптивный сайт
      </a>
      <hr className="portfolio__divider" />
      <a
        href="https://daria-lgtn.github.io/mesto/"
        target="_blank"
        rel="noreferrer"
        className="portfolio__info"
      >
        Одностраничное приложение
      </a>
    </section>
  );
}
