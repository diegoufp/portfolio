import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { Routes,Route} from "react-router-dom";
import "../css/Main.css";
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';


const Main = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <main className={theme}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about_me" element={<AboutMe/>}/>
                    <Route exact path="/skills" element={<Skills/>} />
                    <Route exact path="/portfolio" element={<Portfolio/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
        </main>
    )
}

export default Main;

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,224C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
*/