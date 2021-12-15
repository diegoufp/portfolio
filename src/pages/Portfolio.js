import React, { useContext } from 'react';
import "../css/Portfolio.css";
import LanguageContext from '../contexts/LanguageContext';
import { useSlider } from '../hooks/useSlider';

const Portfolio = () => {
    const {sliderTexts} = useContext(LanguageContext);
    const {slider,handleSlider} = useSlider(Object.values(sliderTexts).length);

    console.log(sliderTexts[slider])

    return (
        <div className="main__portfolio">
            <div className="main__portfolio-slider">
            <div className="main__portfolio-information">
                <figure>
                    <img />
                </figure>
                <div className="main__portfolio-text"></div>
            </div>
            <button id="left" value="left" onClick={handleSlider}/>
            <button id="right" value="right" onClick={handleSlider}/>
            </div>
        </div>
    )
}

export default Portfolio;
