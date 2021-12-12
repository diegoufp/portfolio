import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import "../css/Card.css";

const Card = ({img, title}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <section className="card">
            <figure className={theme}>
                <img className={theme} src={img} alt={title} loading="lazy"/>
                <figcaption>{title}</figcaption>
            </figure>
        </section>
    )
}

export default Card;
