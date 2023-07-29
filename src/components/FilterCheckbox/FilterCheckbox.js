import React from "react";
import "./FilterCheckbox.css";

export function FilterCheckbox(props) {
    const name = props.name;

    return (
        <label htmlFor={`filter-checkbox-${name}`} className="filter-checkbox">
            <input className="filter-checkbox__input" type="checkbox" id={`filter-checkbox-${name}`}></input>
            <div className="filter-checkbox__background" />
            <div className="filter-checkbox__toggle"></div>

            <div className="filter-checkbox__label">Короткометражки</div>
        </label>
    );
}
