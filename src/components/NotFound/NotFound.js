import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found__description">
                <div className="not-found__description-code">404</div>
                <div className="not-found__description-text">Страница не найдена</div>
            </div>
            <Link to="/" className="not-found__link">Назад</Link>
        </div>
    );
}
