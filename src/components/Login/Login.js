import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export function Login() {

    return (
        <main className="login">
            <Link to="/" className="login__link"></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form">
                <div className="login__form-fields">
                    <div className="login__form-field">
                        <label className="login__form-field-label">E-mail</label>
                        <input className="login__form-field-input"
                            type="email" name="email" />
                    </div>
                    <div>
                        <label className="login__form-field-label">Пароль</label>
                        <input className="login__form-field-input"
                            type="password" name="password" />
                    </div>
                </div>

                <button className="login__form-submit" type="submit">Войти</button>
            </form>
            <p className="login__form-signup">
                Еще не зарегистрированы? 
                <Link className="login__form-signup-link" to="/signup">Регистрация</Link>
            </p>
        </main>
    );
}
