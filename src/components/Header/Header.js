import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css";

export function Header(props) {
    const authorized = props.authorized;

    return (
        <header className="header">
            <Link to="/" className="header__logo" />

            {authorized && (
                <div className="header__navigation-desktop">
                    <Navigation
                        type="bold"
                        options={[
                            { to: "/movies", title: "Фильмы" },
                            { to: "/saved-movies", title: "Сохраненные фильмы" },
                        ]}
                    />
                </div>
            )}

            {!authorized && (
                <div className="header__actions-unauthorized">
                    <Link to="/signup" className="header__actions-unauthorized-signup">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="header__actions-unauthorized-signin">
                        Войти
                    </Link>
                </div>
            )}

            {authorized && (
                <div className="header__actions-authorized">
                    <div className="header__actions-authorized-desktop">
                        <Link to="/profile" className="header__actions-authorized-profile">Аккаунт</Link>
                    </div>
                    <div className="header__actions-authorized-mobile">
                        <input type="checkbox" id="header__actions-authorized-drawer-toggle"
                            className="header__actions-authorized-drawer-toggle"></input>
                        <label htmlFor="header__actions-authorized-drawer-toggle"
                            className="header__actions-authorized-drawer-toggle-view"></label>
                        <label htmlFor="header__actions-authorized-drawer-toggle"
                            className="header__actions-authorized-drawer-toggle-background"></label>
                        <div className="header__actions-authorized-drawer">
                            <div className="header__actions-authorized-menu-mobile">
                                <label htmlFor="header__actions-authorized-drawer-toggle"
                                    className="header__actions-authorized-drawer-toggle-close-btn"></label>

                                <Navigation
                                    type="underline"
                                    options={[
                                        { to: "/", title: "Главная" },
                                        { to: "/movies", title: "Фильмы" },
                                        { to: "/saved-movies", title: "Сохраненные фильмы" },
                                    ]}
                                />

                                <div className="header__actions-authorized-menu-mobile-footer">
                                    <Link to="/profile" className="header__actions-authorized-profile">Аккаунт</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
