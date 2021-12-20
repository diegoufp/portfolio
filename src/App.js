import React from 'react';
import {HashRouter, Routes,Route} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
    return (
        <>
            <HashRouter>
                <ThemeProvider>
                    <LanguageProvider>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </LanguageProvider>
                </ThemeProvider>
            </HashRouter>
        </>
    )
}

export default App;
