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
            <main>
                <Promo />
                <NavTab
                    options={[
                        { title: "О проекте", to: "about" },
                        { title: "Технологии", to: "techs" },
                        { title: "Студент", to: "student" },
                    ]}
                />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
