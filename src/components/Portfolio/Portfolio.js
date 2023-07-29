import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <Link to="#" className="portfolio__info">
                Статичный сайт
            </Link>
            <hr className="portfolio__divider" />
            <Link to="#" className="portfolio__info">
                Адаптивный сайт
            </Link>
            <hr className="portfolio__divider" />
            <Link to="#" className="portfolio__info">
                Одностраничное приложение
            </Link>
        </section>
    );
}
