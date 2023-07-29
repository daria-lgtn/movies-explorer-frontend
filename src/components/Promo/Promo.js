import React from "react";
import promo from "../../images/promo.svg";
import "./Promo.css";

export function Promo() {

    return (
        <section className="promo">
            <img className="promo__logo" src={promo} alt="promo"/>
            <h1 className="promo__text">
                Учебный проект студента 
                <br />
                факультета Веб-разработки.
            </h1>
        </section>
    );
}
