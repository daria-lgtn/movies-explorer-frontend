import React from "react";
import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  const onBack = function () {
    navigate(-1);
  };

  return (
    <main className="not-found">
      <section className="not-found__description">
        <p className="not-found__description-code">404</p>
        <p className="not-found__description-text">Страница не найдена</p>
      </section>
      <button onClick={onBack} className="not-found__link">
        Назад
      </button>
    </main>
  );
}
