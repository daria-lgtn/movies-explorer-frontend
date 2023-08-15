import React from "react";
import "./SearchForm.css";

export function SearchForm(props) {
  const { value, onChange } = props;

  function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());
    onChange(data.search);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        name="search"
        defaultValue={value}
        className="search-form__input"
        placeholder="Фильм"
      />
      <button type="submit" className="search-form__btn"></button>
    </form>
  );
}
