import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Preloader } from "../Preloader/Preloader";
import { SearchForm } from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export function SavedMovies(props) {
  const error = props.error;
  const movies = props.movies.filter((e) => e.liked);
  const onLikeToggle = props.onLikeToggle;
  const { filtered, search, handleSearch, short, handleShort } = useSearch(
    movies,
    false,
  );

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
