import React from "react";

export function useSearch(movies) {
  const [search, setSearch] = React.useState(
    localStorage.getItem("search") ?? "",
  );
  const handleSearch = function (value) {
    localStorage.setItem("search", value);
    setSearch(value);
  };

  const [short, setShort] = React.useState(
    JSON.parse(localStorage.getItem("short") ?? "false"),
  );
  const handleShort = function (value) {
    localStorage.setItem("short", JSON.stringify(value));
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
      return e.duration < 40;
    }

    return true;
  };

  const filtered = movies
    ? movies.filter((e) => filterBySearch(e) && filterByShort(e))
    : movies;

  return { filtered, short, handleSearch, search, handleShort };
}
