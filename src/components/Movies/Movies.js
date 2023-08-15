import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Movies.css";
import { Preloader } from "../Preloader/Preloader";

export function Movies() {
  const [error, setError] = React.useState("");
  const [movies, setMovies] = React.useState(null);

  const { filtered, search, handleSearch, short, handleShort } =
    useSearch(movies);

  React.useEffect(() => {
    Promise.all([moviesApi.movies(), mainApi.movies()])
      .then(([data, saved]) => {
        const liked = new Set(saved.map((e) => e.movieId));
        const converted = data.map((e) => ({ ...e, liked: liked.has(e.id) }));

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
      const update = [...prev];
      const item = update.find((e) => e.id === id);
      if (item) {
        item.liked = !item.liked;
      }

      return update;
    });
  };

  return (
    <>
      <Header />
      <main className="movies">
        <section className="movies__search-form">
          <SearchForm value={search} onChange={handleSearch} />
        </section>
        <section className="movies__checkbox">
          <FilterCheckbox value={short} onChange={handleShort} />
        </section>

        <hr className="movies__divider" />

        <p className="movies__error">{error}</p>
        {!movies && !error && <Preloader />}
        {!error && (
          <MoviesCardList movies={filtered} onLikeToggle={onLikeToggle} />
        )}
      </main>
      <Footer />
    </>
  );
}
