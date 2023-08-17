import React from "react";
import "./NavTab.css";

export function NavTab(props) {
  const options = props.options;

  return (
    <nav className="navtab">
      {options.map((option, index) => (
        <a href={`#${option.to}`} key={index} className="navtab__link">
          {option.title}
        </a>
      ))}
    </nav>
  );
}
