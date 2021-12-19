import React from 'react';
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "../css/Home.css"


const Home = () => {
    return (
        <>
            <AboutMe />
            <Skills/>
            <Portfolio/>
            <Contact/>
        </>
    )
}

export default Home;
