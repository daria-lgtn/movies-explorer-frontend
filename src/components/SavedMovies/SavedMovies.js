import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export function SavedMovies() {

    return (
        <>
            <Header authorized/>
            <main className="saved-movies">
                <section className="saved-movies__search-form">
                    <SearchForm />
                </section>
                <section className="saved-movies__checkbox">
                    <FilterCheckbox />
                </section>

                <hr className="saved-movies__divider" />

                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}
