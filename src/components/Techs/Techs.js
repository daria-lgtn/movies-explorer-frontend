import React from "react";
import "./Techs.css";

export function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__content">
        <h2 className="techs__content-title">Технологии</h2>
        <hr className="techs__content-divider" />
        <p className="techs__content-description">7 технологий</p>
        <p className="techs__content-info">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__content-blocks">
          <div className="techs__content-blocks-card">HTML</div>
          <div className="techs__content-blocks-card">CSS</div>
          <div className="techs__content-blocks-card">JS</div>
          <div className="techs__content-blocks-card">React</div>
          <div className="techs__content-blocks-card">Git</div>
          <div className="techs__content-blocks-card">Express.js</div>
          <div className="techs__content-blocks-card">mongoDB</div>
        </div>
      </div>
    </section>
  );
}
