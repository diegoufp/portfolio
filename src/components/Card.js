import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Card.css";

const Card = ({img, title}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <section className="card">
            <figure className={theme}>
                <img src={img} alt={title}/>
                <figcaption>{title}</figcaption>
            </figure>
        </section>
    )
}

export default Card;
