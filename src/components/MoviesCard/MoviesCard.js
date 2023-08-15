import React from "react";
import circleEmpty from "../../images/icon-circle-empty.svg";
import circleFilled from "../../images/icon-circle-filled.svg";
import { mainApi } from "../../utils/MainApi";
import "./MoviesCard.css";

function format(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч${minutes}м `;
}

export function MoviesCard(props) {
  const movie = props.movie;
  const onToggle = props.onLikeToggle;
  console.log(movie);

  const onLike = function () {
    console.log(movie);
    mainApi
      .like({
        movieId: movie.id,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        nameRu: movie.nameRU,
        nameEn: movie.nameEN,
        trailerLink: movie.trailerLink,
        image: "https://api.nomoreparties.co/" + movie.image.url,
        thumbnail:
          "https://api.nomoreparties.co/" + movie.image.formats.thumbnail.url,
      })
      .then(() => onToggle(movie.id));
  };

  const onLikeUndo = function () {
    mainApi.likeUndo(movie.id).then(() => onToggle(movie.id));
  };

  return (
    <div
      // onClick={onLike}
      //href={movie.trailerLink} target="_blank" rel="noreferrer"
      className="movies-card"
    >
      <img
        src={"https://api.nomoreparties.co/" + movie.image.url}
        alt="movie"
        className="movies-card__image"
      ></img>
      <div className="movies-card__description">
        <div className="movies-card__description-row">
          <p className="movies-card__description-row-title">{movie.nameRU}</p>
          <button
            onClick={movie.liked ? onLikeUndo : onLike}
            className="movies-card__description-row-indicator"
          >
            <img
              src={movie.liked ? circleFilled : circleEmpty}
              alt="circle"
            ></img>
          </button>
        </div>
        <p className="movies-card__description-duration">
          {format(movie.duration)}
        </p>
      </div>
    </div>
  );
}
