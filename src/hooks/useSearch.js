import React from "react";
import {
  FORM_SEARCH,
  FORM_SHORT,
  SHORT_FILM_DURATION,
} from "../utils/constants";

export function useSearch(movies, fromLocalStorage) {
  const [search, setSearch] = React.useState(
    fromLocalStorage ? localStorage.getItem(FORM_SEARCH) ?? "" : "",
  );
  const handleSearch = function (value) {
    fromLocalStorage && localStorage.setItem(FORM_SEARCH, value);
    setSearch(value);
  };

  const [short, setShort] = React.useState(
    fromLocalStorage
      ? JSON.parse(localStorage.getItem(FORM_SHORT) ?? "false")
      : false,
  );
  const handleShort = function (value) {
    fromLocalStorage && localStorage.setItem(FORM_SHORT, JSON.stringify(value));
    setShort(value);
  };

  const filterBySearch = function (e) {
    return (
      e.nameRU.toLowerCase().includes(search.toLowerCase()) ||
      e.nameEN.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterByShort = function (e) {
    if (short) {
      return e.duration < SHORT_FILM_DURATION;
    }

    return true;
  };

  const filtered = movies
    ? movies.filter((e) => filterBySearch(e) && filterByShort(e))
    : movies;

  return { filtered, short, handleSearch, search, handleShort };
}
