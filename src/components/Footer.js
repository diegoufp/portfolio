import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className={theme}>

        </footer>
    )
}

export default Footer;
