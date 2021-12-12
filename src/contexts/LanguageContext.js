import React,{ createContext,useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";

const translations = {
    es:{
        language: "es", 
        themeDark: "Oscuro", 
        themeLight: "Claro",
        aboutMe: "Acerca de mi",
        skills: "Habilidades",
        portfolio: "Portafolio",
        contact: "Contacto",
        home: "Inicio",
        presentation:"Soy freelancer, apasionado por la tecnología, tengo más de tres años como desarrollador e incluso actualmente continúo expandiendo mi conocimiento sobre nuevas tecnologías de forma autodidacta",
        name:"Soy Diego Fernandez",
        stand: "Full Stack Developer"
    },
    en:{
        language: "en",
        themeDark: "Dark", 
        themeLight: "Light",
        aboutMe: "About Me",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
        home: "Home",
        presentation: "I am a freelancer, passionate about technology, I have more than three years as a developer and even currently I continue to expand my knowledge about new technologies autodidactically",
        name: "I'm Diego Fernandez",
        stand: "Full Stack Developer"

    }
}

const icons = {
    github: {
        img: "../../public/icons/github.png",
        title: "GITHUB"
    },
    javascript: {
        img: "../../public/icons/javascript.png",
        title: "JAVASCRIPT"
    },
    python: {
        img: "../../public/icons/py.png",
        title: "PYTHON"
    },
    linux: {
        img: "../../public/icons/linux.png",
        title: "LINUX"
    },
    sql: {
        img: "../../public/icons/sql.png",
        title: "SQL"
    },
    pandas: {
        img: "../../public/icons/pandas.png",
        title: "PANDAS"
    },
    html: {
        img: "../../public/icons/html.png",
        title: "HTML"
    },
    css: {
        img: "../../public/icons/css-3.png",
        title: "CSS"
    }
}

const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts,setTexts] = useState(translations[language]);

    const handleLanguage = (e) =>{
        if(e.target.checked){
            setLanguage("es");
            setTexts(translations.es);
        }else{
            setLanguage("en");
            setTexts(translations.en);
        }
    };
    const data={texts,handleLanguage, icons};
    return (
        <LanguageContext.Provider value={data}>
        {children}
        </LanguageContext.Provider>)
};

export {LanguageProvider};
export default LanguageContext;