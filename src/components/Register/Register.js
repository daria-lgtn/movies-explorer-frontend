import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import "./Register.css";

export function Register() {
  const { values, errors, isValid, handleChange } = useForm();

  const [error, setError] = React.useState("");
  const { handleRegister } = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    setError("");
    handleRegister(data).catch((message) => setError(message));
  }

  return (
    <main className="register">
      <Link to="/" className="register__link"></Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <div className="register__form-fields">
          <Input
            name="name"
            type="text"
            label="Имя"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            pattern="[A-Za-zа-яА-Я]+"
            required
          />
          <Input
            name="email"
            type="email"
            label="E-mail"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <Input
            name="password"
            type="password"
            label="Пароль"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            minLength={8}
            required
          />
        </div>

        <p className="register__form-error">{error}</p>
        <button
          disabled={!isValid}
          className="register__form-submit"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__form-signup">
        Уже зарегистрированы?
        <Link className="register__form-signup-link" to="/signin">
          Войти
        </Link>
      </p>
    </main>
  );
}
