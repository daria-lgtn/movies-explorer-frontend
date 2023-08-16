import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { Preloader } from "../Preloader/Preloader";

export function SavedMovies() {
  const [error, setError] = React.useState("");
  const [movies, setMovies] = React.useState(null);

  const { filtered, search, handleSearch, short, handleShort } = useSearch(
    "saved",
    movies,
  );

  React.useEffect(() => {
    Promise.all([moviesApi.movies(), mainApi.movies()])
      .then(([data, saved]) => {
        const liked = new Set(saved.map((e) => e.movieId));
        const converted = data
          .filter((e) => liked.has(e.id))
          .map((e) => ({ ...e, liked: true }));

        console.log(saved);
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
      const update = prev.filter((e) => e.id !== id);

      return update;
    });
  };

  return (
    <>
      <Header />
      <main className="saved-movies">
        <section className="saved-movies__search-form">
          <SearchForm value={search} onChange={handleSearch} />
        </section>
        <section className="saved-movies__checkbox">
          <FilterCheckbox value={short} onChange={handleShort} />
        </section>

        <hr className="saved-movies__divider" />

        <p className="movies__error">{error}</p>
        {!movies && !error && <Preloader />}
        {!error && (
          <MoviesCardList
            movies={filtered}
            onLikeToggle={onLikeToggle}
            type="private"
          />
        )}
      </main>
      <Footer />
    </>
  );
}
