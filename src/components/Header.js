import React, { useContext, useRef } from 'react';
import { Link} from "react-router-dom";
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Header.css";
import { useBurger } from '../hooks/useBurger';



const Header = () => {
    const {theme,handleTheme} = useContext(ThemeContext);
    const {texts, handleLanguage} = useContext(LanguageContext);
    const refBurger = useRef();

    const {burger,handleBurger,handleBoton} =useBurger(refBurger)



    return (
        <header>
        <div className={`header-style ${theme}`}>
            <div className="header-title"><h2>dufp</h2></div>
            <nav className={burger}>
                <ol className={`nav-ol ${theme} ${burger}`}>
                    <li className="nav-li"> 
                        <Link className={theme} onClick={handleBoton} to="/">{texts.home}
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} onClick={handleBoton} to="/about_me">{texts.aboutMe}</Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} onClick={handleBoton} to="/skills">{texts.skills}</Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} onClick={handleBoton} to="/portfolio">{texts.portfolio}</Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} onClick={handleBoton} to="/contact">{texts.contact}</Link>
                    </li>
                </ol>
            </nav>
            <input className={`burger ${theme}`} ref={refBurger} type="checkbox" name="burger" onClick={handleBurger}/>
            <div className="header-options">
                <input className={`switch theme ${theme}`} type="checkbox" name="theme" id="dark-check" onClick={handleTheme}/>
                <input className={`switch lang ${theme}`} type="checkbox" name="lang" id="lang-check" onClick={handleLanguage}/>
            </div>
        </div>
        </header>
    )
}

export default Header;
