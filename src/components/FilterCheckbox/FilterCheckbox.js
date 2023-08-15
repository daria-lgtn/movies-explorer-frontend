import React from "react";
import "./FilterCheckbox.css";

export function FilterCheckbox(props) {
  const name = props.name;

  const onChange = function (e) {
    props.onChange(e.target.checked);
  };

  return (
    <label htmlFor={`filter-checkbox-${name}`} className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        checked={props.value}
        onChange={onChange}
        type="checkbox"
        id={`filter-checkbox-${name}`}
      ></input>
      <span className="filter-checkbox__background" />
      <span className="filter-checkbox__toggle"></span>

      <span className="filter-checkbox__label">Короткометражки</span>
    </label>
  );
}
