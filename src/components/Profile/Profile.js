import React from "react";
import { Header } from "../Header/Header";
import "./Profile.css";

export function Profile() {
    const [edit, setEdit] = React.useState(false);

    const onEdit = function () {
        setEdit(true);
    }

    return (
        <>
            <Header authorized />
            <div className="profile">
                <p className="profile__title">Привет, ИМЯ</p>

                <div className="profile__field">
                    <p className="profile__field-name">Имя</p>
                    <p className="profile__field-value">ИМЯ</p>
                </div>
                <hr className="profile__divider" />
                <div className="profile__field">
                    <p className="profile__field-name">E-mail</p>
                    <p className="profile__field-value">pochta@yandex.ru</p>
                </div>

                <div className="profile__actions">
                    {edit && (
                        <button className="profile__actions-save">Сохранить</button>
                    )}
                    {!edit && (
                        <>
                            <button className="profile__actions-edit" onClick={onEdit}>Редактировать</button>
                            <button className="profile__actions-logout">Выйти из аккаунта</button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
