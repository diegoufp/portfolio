import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Header.css";


const Header = () => {
    const {theme,handleTheme} = useContext(ThemeContext);
    const {texts, handleLanguage} = useContext(LanguageContext);
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
            <div className="header-options">
                <div className="header-options-theme">
                    <input type="radio" id="dark" name="theme" value="dark" onClick={handleTheme} defaultChecked={theme === "dark"}/>
                    <label htmlFor="dark">{texts.themeDark}</label>
                    <input type="radio" id="light" name="theme" onClick={handleTheme} value="light" defaultChecked={theme === "light"}/>
                    <label htmlFor="light">{texts.themeLight}</label>
                </div>
                <div className="header-options-lang">
                    <input type="radio" id="es" name="language" value="es" onClick={handleLanguage} defaultChecked={texts.language === "es"}/>
                    <label htmlFor="es">es</label> 
                    <input type="radio" id="en" name="language" value="en" onClick={handleLanguage} defaultChecked={texts.language === "en"}/>
                    <label htmlFor="en">en</label> 
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;
