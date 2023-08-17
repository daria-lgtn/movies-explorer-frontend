import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import "./Login.css";
import { EMAIL_REGEX } from "../../utils/constants";

export function Login(props) {
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange } = useForm();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.target).entries());

    setError("");
    return props
      .handleLogin(data)
      .then(() => navigate("/movies", { replace: true }))
      .catch((message) => setError(message))
      .finally(() => setLoading(false));
  }

  return (
    <main className="login">
      <Link to="/" className="login__link"></Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <div className="login__form-fields">
          <Input
            name="email"
            type="text"
            pattern={EMAIL_REGEX}
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
          disabled={!isValid || loading}
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
