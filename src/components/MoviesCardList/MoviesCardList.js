import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Preloader } from "../Preloader/Preloader";
import "./MoviesCardList.css";

export function MoviesCardList(props) {
    const movies = props.movies ?? [];

    if (movies.length === 0) {
        return (
            <Preloader />
        );
    }

    return (
        <section className="movies-card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </section>
    );
}
