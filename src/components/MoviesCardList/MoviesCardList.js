import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getSlices } from "./getSlices";

export function MoviesCardList(props) {
  const movies = props.movies ?? [];
  const onLikeToggle = props.onLikeToggle;

  const { width } = useWindowSize();
  const { first, next } = getSlices(width);

  const [size, setSize] = React.useState(first);
  const onNext = function () {
    setSize(size + next);
  };

  React.useEffect(() => {
    setSize(first);
  }, [first]);

  return (
    <section className="movies-card-list">
      {movies.length === 0 && (
        <div className="movies-card-list__not-found">Ничего не найдено</div>
      )}

      <div className="movies-card-list__grid">
        {movies.slice(0, size).map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onLikeToggle={onLikeToggle}
            type={props.type}
          />
        ))}
      </div>

      {size < movies.length && (
        <button onClick={onNext} className="movies-card-list__more">
          Ещё
        </button>
      )}
    </section>
  );
}
