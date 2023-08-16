import React from "react";
import iconCircleEmpty from "../../images/icon-circle-empty.svg";
import iconCircleFilled from "../../images/icon-circle-filled.svg";
import iconDelete from "../../images/icon-delete.svg";
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

  const onLike = function () {
    return mainApi
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
      .then(() => onToggle(movie.id))
      .catch((error) => console.log(error));
  };

  const onLikeUndo = function () {
    return mainApi
      .likeUndo(movie.id)
      .then(() => onToggle(movie.id))
      .catch((error) => console.log(error));
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
              src={
                props.type === "private"
                  ? iconDelete
                  : movie.liked
                  ? iconCircleFilled
                  : iconCircleEmpty
              }
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
