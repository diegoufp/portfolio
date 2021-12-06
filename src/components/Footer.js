import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Footer.css"

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext)
    return (
        <footer>
        <div className={`footer-style ${theme}`}>
                <div className="footer-nav">
                    <div className="footer-title"><h2>dufp</h2></div>
                    <ol className="footer-ol">
                        <li className="footer-li"> 
                            <a className={theme} href="#">{texts.home}
                            </a>
                        </li>
                        <li className="footer-li">
                            <a className={theme} href="#">{texts.aboutMe}</a>
                        </li>
                        <li className="footer-li">
                            <a className={theme} href="#">{texts.skills}</a>
                        </li>
                        <li className="footer-li">
                            <a className={theme} href="#">{texts.portfolio}</a>
                        </li>
                        <li className="footer-li">
                            <a className={theme} href="#">{texts.contact}</a>
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
