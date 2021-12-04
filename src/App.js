import React from 'react';
import {HashRouter} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
    return (
        <div>
            <HashRouter>
                <ThemeProvider>
                    <Header/>
                    <Main/>
                    <Footer/>
                </ThemeProvider>
            </HashRouter>
        </div>
    )
}

export default App;
