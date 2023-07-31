import React from "react";
import movie from "../../images/movie.png";
// import circleEmpty from "../../images/icon-circle-empty.svg";
import circleFilled from "../../images/icon-circle-filled.svg";
import "./MoviesCard.css";

export function MoviesCard() {

    return (
        <div className="movies-card">
            <img src={movie} alt="movie"  className="movies-card__image"></img>
            <div className="movies-card__description">
                <div className="movies-card__description-row">
                    <p className="movies-card__description-row-title">
                        33 слова о дизайне
                    </p>
                    <button className="movies-card__description-row-indicator">
                        <img src={circleFilled} alt="circle"></img>
                    </button>
                </div>
                <p className="movies-card__description-duration">
                    1ч42м
                </p>
            </div>
        </div>
    );
}
