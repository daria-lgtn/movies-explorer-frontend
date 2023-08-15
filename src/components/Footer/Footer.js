import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__content-title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <hr className="footer__content-divider" />
        <div className="footer__content-body">
          <p className="footer__content-body-year">{`© ${new Date().getFullYear()}`}</p>
          <p className="footer__content-body-name">Яндекс.Практикум</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/daria-lgtn/movies-explorer-frontend"
            className="footer__content-body-link"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
