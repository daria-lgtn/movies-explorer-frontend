import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import "./Login.css";

export function Login() {
  const { values, errors, isValid, handleChange } = useForm();

  const [error, setError] = React.useState("");
  const { handleLogin } = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    setError("");
    handleLogin(data).catch((message) => setError(message));
  }

  return (
    <main className="login">
      <Link to="/" className="login__link"></Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <div className="login__form-fields">
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

        <p className="login__form-error">{error}</p>
        <button
          disabled={!isValid}
          className="login__form-submit"
          type="submit"
        >
          Войти
        </button>
      </form>
      <p className="login__form-signup">
        Еще не зарегистрированы?
        <Link className="login__form-signup-link" to="/signup">
          Регистрация
        </Link>
      </p>
    </main>
  );
}
