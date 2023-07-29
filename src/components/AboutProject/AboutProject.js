import React from "react";
import "./AboutProject.css";

export function AboutProject() {

    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <hr className="about-project__divider" />
            <div className="about-project__info">
                <div className="about-project__info-block">
                    <p className="about-project__info-block-title">
                        Дипломный проект включал 5 этапов
                    </p>
                    <p className="about-project__info-block-description">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__info-block">
                    <p className="about-project__info-block-title">
                        На выполнение диплома ушло 5 недель
                    </p>
                    <p className="about-project__info-block-description">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>

            <div className="about-project__progress">
                <p className="about-project__progress-bar about-project__progress-bar_active">
                    1 неделя
                </p>
                <p className="about-project__progress-bar">
                    4 недели
                </p>
                <p className="about-project__progress-label">
                    Back-end
                </p>
                <p className="about-project__progress-label">
                    Front-end
                </p>
            </div>
        </section>
    );
}
