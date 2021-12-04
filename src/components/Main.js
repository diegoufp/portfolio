import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';


const Main = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    return (
        <main className={theme}>
        </main>
    )
}

export default Main;
