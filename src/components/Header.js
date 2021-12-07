import React, { useContext } from 'react';
import { Link} from "react-router-dom";
import BurgerContext from '../contexts/BurgerContext';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Header.css";


const Header = () => {
    const {theme,handleTheme} = useContext(ThemeContext);
    const {texts, handleLanguage} = useContext(LanguageContext);
    const {burger,handleBurger} = useContext(BurgerContext)

    return (
        <header>
        <div className={`header-style ${theme}`}>
            <div className="header-title"><h2>dufp</h2></div>
            <nav className={burger}>
                <ol className={`nav-ol ${theme} ${burger}`}>
                    <li className="nav-li"> 
                        <Link className={theme} to="/">{texts.home}
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} to="/about_me">{texts.aboutMe}</Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} to="/skills">{texts.skills}</Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} to="/portfolio">{texts.portfolio}</Link>
                    </li>
                    <li className="nav-li">
                        <Link className={theme} to="/contact">{texts.contact}</Link>
                    </li>
                </ol>
            </nav>
            <input className={`burger ${theme}`}type="checkbox" name="burger" onClick={handleBurger}/>
            <div className="header-options">
                <input className={`switch theme ${theme}`} type="checkbox" name="theme" id="dark-check" onClick={handleTheme}/>
                <input className={`switch lang ${theme}`} type="checkbox" name="lang" id="lang-check" onClick={handleLanguage}/>
            </div>
        </div>
        </header>
    )
}

export default Header;
