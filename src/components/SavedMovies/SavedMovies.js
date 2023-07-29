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
            <div className="saved-movies">
                <div className="saved-movies__search-form">
                    <SearchForm />
                </div>
                <div className="saved-movies__checkbox">
                    <FilterCheckbox />
                </div>

                <hr className="saved-movies__divider" />

                <MoviesCardList />
            </div>
            <Footer />
        </>
    );
}
