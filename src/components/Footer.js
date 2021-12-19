import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Footer.css";
import { Link} from "react-router-dom";

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext)
    return (
        <footer>
        <div className={`footer-style ${theme}`}>
            <div className="footer-nav">
                <div className="footer-title">
                <h2>dufp</h2></div>
                <ol className="footer-ol">
                        <li className="footer-li"> 
                            <Link className={theme} to="/">{texts.home}
                            </Link>
                        </li>
                        <li className="footer-li">
                            <Link className={theme} to="/about_me">{texts.aboutMe}</Link>
                        </li>
                        <li className="footer-li">
                            <Link className={theme} to="/skills">{texts.skills}</Link>
                        </li>
                        <li className="footer-li">
                            <Link className={theme} to="/portfolio">{texts.portfolio}</Link>
                        </li>
                        <li className="footer-li">
                            <Link className={theme} to="/contact">{texts.contact}</Link>
                        </li>
                </ol>
            </div>
            <div className="footer-contact">
                <h4>Copyright © 2021 dufp</h4>
            </div> 
        </div>
        </footer>
    );
}

export default Footer;
