import React from "react";
import "./SearchForm.css";

export function SearchForm() {

    return (
        <div className="search-form">
            <input className="search-form__input" placeholder="Фильм"/>
            <button className="search-form__btn"></button>
        </div>
    );
}
