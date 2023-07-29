import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Movies.css";

export function Movies() {

    return (
        <>
            <Header authorized/>
            <section className="movies">
                <div className="movies__search-form">
                    <SearchForm />
                </div>
                <div className="movies__checkbox">
                    <FilterCheckbox />
                </div>

                <hr className="movies__divider" />

                <MoviesCardList movies={Array(10)}/>
            </section>
            <Footer />
        </>
    );
}
