import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export function Register() {

    return (
        <div className="register">
            <Link to="/" className="register__link"></Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <div className="register__form_fields">
                    <div className="register__form-field">
                        <label className="register__form-field-label">Имя</label>
                        <input className="register__form-field-input"
                            type="text" name="name" />
                    </div>
                    <div className="register__form-field">
                        <label className="register__form-field-label">E-mail</label>
                        <input className="register__form-field-input"
                            type="email" name="email" />
                    </div>
                    <div>
                        <label className="register__form-field-label">Пароль</label>
                        <input className="register__form-field-input"
                            type="password" name="password" />
                    </div>
                </div>

                <button className="register__form-submit" type="submit">Зарегистрироваться</button>
            </form>
            <p className="register__form-signup">
                Уже зарегистрированы?
                <Link className="register__form-signup-link" to="/signin">Войти</Link>
            </p>
        </div>
    );
}
