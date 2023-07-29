import React from "react";
import "./Footer.css";

export function Footer() {

    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__divider"/>
            <div className="footer__body"> 
                <p className="footer__body-year">{`© ${new Date().getFullYear()}`}</p>
                <p className="footer__body-name">Яндекс.Практикум</p>
                <a href="https://github.com/daria-lgtn/movies-explorer-frontend" className="footer__body-link">Github</a>
            </div>
        </footer>
    );
}
