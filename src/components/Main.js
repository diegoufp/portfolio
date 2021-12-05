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

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,224C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
*/