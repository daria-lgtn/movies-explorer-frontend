import React from "react";
import "./SearchForm.css";

export function SearchForm() {

    return (
        <form className="search-form">
            <input
                required
                minLength={3}
                className="search-form__input" placeholder="Фильм" />
            <button className="search-form__btn"></button>
        </form>
    );
}
