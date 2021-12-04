import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';


const Header = () => {
    const {theme,handleTheme} = useContext(ThemeContext);
    const {texts, handleLanguage} = useContext(LanguageContext);
    return (
        <header className={theme}>
            <div></div>
            <nav></nav>
            <div>
                <div>
                    <input type="radio" id="dark" name="theme" value="dark" onClick={handleTheme} defaultChecked={theme === "dark"}/>
                    <label htmlFor="dark">{texts.themeDark}</label>
                    <input type="radio" id="light" name="theme" onClick={handleTheme} value="light" defaultChecked={theme === "light"}/>
                    <label htmlFor="light">{texts.themeLight}</label>
                </div>
                <div>
                    <input type="radio" id="es" name="language" value="es" onClick={handleLanguage} defaultChecked={texts.language === "es"}/>
                    <label htmlFor="es">es</label> 

                    <input type="radio" id="en" name="language" value="en" onClick={handleLanguage} defaultChecked={texts.language === "en"}/>
                    <label htmlFor="en">en</label> 
                </div>
            </div>
        </header>
    )
}

export default Header;
