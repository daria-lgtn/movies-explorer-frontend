import React from "react";
import "./Techs.css";

export function Techs() {

    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <hr className="techs__divider" />
            <p className="techs__description">7 технологий</p>
            <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__blocks">
                <div className="techs__blocks-card">
                    HTML
                </div>
                <div className="techs__blocks-card">
                    CSS
                </div>
                <div className="techs__blocks-card">
                    JS
                </div>
                <div className="techs__blocks-card">
                    React
                </div>
                <div className="techs__blocks-card">
                    Git
                </div>
                <div className="techs__blocks-card">
                    Express.js
                </div>
                <div className="techs__blocks-card">
                    mongoDB
                </div>
            </div>
        </section>
    );
}
