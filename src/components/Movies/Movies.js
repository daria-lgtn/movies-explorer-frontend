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
            <main className="movies">
                <section className="movies__search-form">
                    <SearchForm />
                </section>
                <section className="movies__checkbox">
                    <FilterCheckbox />
                </section>

                <hr className="movies__divider" />

                <MoviesCardList movies={Array(10)}/>
            </main>
            <Footer />
        </>
    );
}
