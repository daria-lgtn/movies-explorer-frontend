import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function activeLink(className) {
    return ({ isActive }) => {
        if (isActive) {
            return `${className} ${className}_active`;
        }

        return className;
    };
}

export function Navigation(props) {
    const type = props.type;
    const options = props.options;

    let className = "navigation__bold-link";
    if (type === "underline") {
        className = "navigation__underline-link";
    }

    return (
        <div className="navigation">
            {options.map((option, index) => (
                <NavLink to={option.to}
                    key={index}
                    className={activeLink(className)}>
                    {option.title}
                </NavLink>
            ))}
        </div>
    );
}
