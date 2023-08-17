import React from "react";
import { Route, Routes } from "react-router-dom";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { NotFound } from "../NotFound/NotFound";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

export function RouteMovies() {
  const [error, setError] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setError(null);
    Promise.all([moviesApi.movies(), mainApi.movies()])
      .then(([data, saved]) => {
        const liked = new Set(saved.map((e) => e.movieId));
        const converted = data.map((e) => ({ ...e, liked: liked.has(e.id) }));

        setMovies(converted);
      })
      .catch(() =>
        setError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
        ),
      );
  }, []);

  const onLikeToggle = function (id) {
    setMovies((prev) => {
      const update = [...prev];
      const item = update.find((e) => e.id === id);
      if (item) {
        item.liked = !item.liked;
      }

      return update;
    });
  };

  return (
    <Routes>
      <Route
        path="movies"
        element={
          <Movies movies={movies} error={error} onLikeToggle={onLikeToggle} />
        }
      />
      <Route
        path="saved-movies"
        element={
          <SavedMovies
            movies={movies}
            error={error}
            onLikeToggle={onLikeToggle}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
