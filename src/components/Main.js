import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';


const Main = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <main className={theme}>

        </main>
    )
}

export default Main;
