import React, { useContext } from 'react';
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
            <nav>
                <ol className="nav-ol">
                    <li className="nav-li"> 
                        <a className={theme} href="#">{texts.home}
                        </a>
                    </li>
                    <li className="nav-li">
                        <a className={theme} href="#">{texts.aboutMe}</a>
                    </li>
                    <li className="nav-li">
                        <a className={theme} href="#">{texts.skills}</a>
                    </li>
                    <li className="nav-li">
                        <a className={theme} href="#">{texts.portfolio}</a>
                    </li>
                    <li className="nav-li">
                        <a className={theme} href="#">{texts.contact}</a>
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
