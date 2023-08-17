import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import "./Register.css";
import { EMAIL_REGEX } from "../../utils/constants";

export function Register(props) {
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
      .handleRegister(data)
      .then(() => navigate("/movies", { replace: true }))
      .catch((message) => setError(message))
      .finally(() => setLoading(false));
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

        <p className="register__form-error">{error}</p>
        <button
          disabled={!isValid || loading}
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
