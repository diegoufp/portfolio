import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext)
    return (
        <footer className={theme}>

        </footer>
    );
}

export default Footer;
