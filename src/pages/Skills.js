import React,{ useContext }  from 'react';
import "../css/Skills.css";
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import Card from '../components/Card';

const Skills = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    return (
        <div className="main__skills">
            <div className={`main__skills-information ${theme}`}>
                <div className="main__skills-title">
                    <h2>{texts.skills}</h2>
                </div>
                <div className="main__skills-cards">
                    <Card img="https://quantumworks.co.uk/wp-content/uploads/2021/09/svgexport-1.svg" title="PANCAKESWAP" />
                    <Card img="https://quantumworks.co.uk/wp-content/uploads/2021/09/booged.png" title="BOGGED"  />
                    <Card  img="https://quantumworks.co.uk/wp-content/uploads/2021/09/dextools.png" title="CHART" />
                </div>
            </div>
        </div>
    )
}

export default Skills;
