import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';


const Header = () => {
    const {theme,handleTheme} = useContext(ThemeContext)

    return (
        <header className={theme}>
            <div></div>
            <nav></nav>
            <div>
                <div>
                    <input type="radio" id="dark-header" name="theme" value="dark" onClick={handleTheme} defaultChecked={theme === "dark"}/>
                    <label htmlFor="dark-header">dark</label>
                    <input type="radio" id="light-header" name="theme" onClick={handleTheme} value="light" defaultChecked={theme === "light"}/>
                    <label htmlFor="light-header">light</label>
                </div>
                <div></div>
            </div>
        </header>
    )
}

export default Header;
