import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Preloader } from "../Preloader/Preloader";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Movies.css";

export function Movies(props) {
  const error = props.error;
  const movies = props.movies;
  const onLikeToggle = props.onLikeToggle;
  const { filtered, search, handleSearch, short, handleShort } = useSearch(
    movies,
    true,
  );

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
          <MoviesCardList
            movies={filtered}
            onLikeToggle={onLikeToggle}
            type="public"
          />
        )}
      </main>
      <Footer />
    </>
  );
}
