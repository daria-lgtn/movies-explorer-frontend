import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="not-found">
      <section className="not-found__description">
        <p className="not-found__description-code">404</p>
        <p className="not-found__description-text">Страница не найдена</p>
      </section>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </main>
  );
}
