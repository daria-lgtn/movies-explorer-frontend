import React from "react";
import { useNavigate } from "react-router";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import "./Profile.css";

export function Profile() {
  const { handleUpdate, handleLogout, me } =
    React.useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange } = useForm(me);
  const [error, setError] = React.useState("");

  const [edit, setEdit] = React.useState(false);
  const navigate = useNavigate();

  const onEdit = function () {
    setEdit(true);
  };

  const onLogout = function () {
    localStorage.clear();
    handleLogout();
    navigate("/");
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    setError("");
    handleUpdate(data)
      .then(() => setEdit(false))
      .catch((message) => setError(message));
  };

  return (
    <>
      <Header />
      <div className="profile">
        <p className="profile__title">Привет, {me.name}</p>

        {edit && (
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__form-fields">
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
            </div>

            <div className="profile__actions">
              <p className="profile__form-error">{error}</p>
              <button
                disabled={!isValid}
                type="submit"
                className="profile__actions-save"
              >
                Сохранить
              </button>
            </div>
          </form>
        )}

        {!edit && (
          <>
            <div className="profile__field">
              <p className="profile__field-name">Имя</p>
              <p className="profile__field-value">{me.name}</p>
            </div>
            <hr className="profile__divider" />
            <div className="profile__field">
              <p className="profile__field-name">E-mail</p>
              <p className="profile__field-value">{me.email}</p>
            </div>
          </>
        )}

        {!edit && (
          <div className="profile__actions">
            <button className="profile__actions-edit" onClick={onEdit}>
              Редактировать
            </button>
            <button className="profile__actions-logout" onClick={onLogout}>
              Выйти из аккаунта
            </button>
          </div>
        )}
      </div>
    </>
  );
}
