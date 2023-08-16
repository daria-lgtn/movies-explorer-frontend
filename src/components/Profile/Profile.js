import React from "react";
import { useNavigate } from "react-router";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import "./Profile.css";
import { EMAIL_REGEX } from "../../utils/constants";

export function Profile(props) {
  const me = React.useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange } = useForm(me);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const [edit, setEdit] = React.useState(false);
  const navigate = useNavigate();

  const onEdit = function () {
    setEdit(true);
  };

  const onLogout = function () {
    props.handleLogout();
    navigate("/");
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.target).entries());

    setError("");
    return props
      .handleUpdate(data)
      .then(() => setEdit(false))
      .catch((message) => setError(message))
      .finally(() => setLoading(false));
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
                type="text"
                pattern={EMAIL_REGEX}
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
                disabled={!isValid || loading}
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
