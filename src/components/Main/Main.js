import React from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { AboutProject } from "../AboutProject/AboutProject";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Portfolio } from "../Portfolio/Portfolio";
import { Promo } from "../Promo/Promo";
import { Techs } from "../Techs/Techs";
import { NavTab } from "../NavTab/NavTab";

export function Main() {

    return (
        <>
            <Header />
            <Promo />
            <NavTab
                options={[
                    { title: "О проекте", to: "about" },
                    { title: "Технологии", to: "techs" },
                    { title: "Студент", to: "student" },
                ]}
            />
            <div id="about">
                <AboutProject />
            </div>
            <div id="techs">
                <Techs />
            </div>
            <div id="student">
                <AboutMe />
            </div>
            <Portfolio />
            <Footer />
        </>
    );
}
