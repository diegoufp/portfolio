import React from 'react';
import {HashRouter} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Main/>
                <Footer/>
            </HashRouter>
        </div>
    )
}

export default App;
