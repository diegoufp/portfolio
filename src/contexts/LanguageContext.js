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
        stand: "Full Stack Developer",

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

const slider = {
    es:{
        0:  {img:"0",
            title:"es",
            text:"es"},
        1:  {img:"1",
            title:"es",
            text:"es"},
        2:  {img:"2",
            title:"es",
            text:"es"},
        3:  {img:"3",
            title:"es",
            text:"es"}
    },
    en:{
    0:  {img:"0",
        title:"en",
        text:"en"},
    1:  {img:"1",
        title:"en",
        text:"en"},
    2:  {img:"2",
        title:"en",
        text:"en"},
    3:  {img:"3",
        title:"en",
        text:"en"}
    },
}

const icons = {
    github: {
        img: "../../public/icons/githubN.png",
        title: "GITHUB"
    },
    javascript: {
        img: "../../public/icons/js.png",
        title: "JAVASCRIPT"
    },
    python: {
        img: "../../public/icons/PY.png",
        title: "PYTHON"
    },
    linux: {
        img: "../../public/icons/LINUX.png",
        title: "LINUX"
    },
    sql: {
        img: "../../public/icons/sqlserver.png",
        title: "SQL"
    },
    pandas: {
        img: "../../public/icons/pandas.png",
        title: "PANDAS"
    },
    html: {
        img: "../../public/icons/html5.png",
        title: "HTML"
    },
    css: {
        img: "../../public/icons/css.png",
        title: "CSS"
    },
    react: {
        img: "../../public/icons/REACT.png",
        title: "REACT"
    },
    node: {
        img:"../../public/icons/NODE.png",
        title:"NODE"
    },
    git: {
        img:"../../public/icons/GITT.png",
        title:"GIT"
    },
    docker: {
        img:"../../public/icons/DOCKERINV.png",
        title:"DOCKER"
    },
    sass: {
        img:"../../public/icons/SAS.png",
        title:"SASS"
    },
    mongo: {
        img:"../../public/icons/MONGO.png",
        title:"MONGO"
    }
}

const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts,setTexts] = useState(translations[language]);
    const [sliderTexts, setSliderText] = useState(slider[language])

    const handleLanguage = (e) =>{
        if(e.target.checked){
            setLanguage("es");
            setTexts(translations.es);
            setSliderText(slider.es);

        }else{
            setLanguage("en");
            setTexts(translations.en);
            setSliderText(slider.en);
        }
    };
    const data={texts,handleLanguage, icons, sliderTexts};
    return (
        <LanguageContext.Provider value={data}>
        {children}
        </LanguageContext.Provider>)
};

export {LanguageProvider};
export default LanguageContext;