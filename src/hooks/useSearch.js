import React from "react";
import {
  FORM_SEARCH,
  FORM_SHORT,
  SHORT_FILM_DURATION,
} from "../utils/constants";

export function useSearch(suffix, movies) {
  const lsSearch = FORM_SEARCH + "-" + suffix;
  const lsShort = FORM_SHORT + "-" + suffix;

  const [search, setSearch] = React.useState(
    localStorage.getItem(lsSearch) ?? "",
  );
  const handleSearch = function (value) {
    localStorage.setItem(lsSearch, value);
    setSearch(value);
  };

  const [short, setShort] = React.useState(
    JSON.parse(localStorage.getItem(lsShort) ?? "false"),
  );
  const handleShort = function (value) {
    localStorage.setItem(lsShort, JSON.stringify(value));
    setShort(value);
  };

  const filterBySearch = function (e) {
    if (search === "") {
      return false;
    }

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
