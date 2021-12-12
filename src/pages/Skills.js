import React,{ useContext }  from 'react';
import "../css/Skills.css";
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import Card from '../components/Card';

const Skills = () => {
    const {theme} = useContext(ThemeContext);
    const {texts,icons} = useContext(LanguageContext);
    return (
        <div className="main__skills">
            <div className={`main__skills-information ${theme}`}>
                <div className="main__skills-title">
                    <h2>{texts.skills}</h2>
                </div>
                <div className="main__skills-cards">
                    <Card img={icons.github.img} title={icons.github.title}/>
                    <Card img={icons.linux.img} title={icons.linux.title}/>
                    <Card  img={icons.sql.img} title={icons.sql.title}/>
                    <Card img={icons.pandas.img} title={icons.pandas.title}/>
                    <Card img={icons.html.img} title={icons.html.title}/>
                    <Card img={icons.css.img} title={icons.css.title}/>
                    <Card img={icons.javascript.img} title={icons.javascript.title}/>
                    <Card img={icons.python.img} title={icons.python.title}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
