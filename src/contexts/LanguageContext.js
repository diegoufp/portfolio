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
        home: "Inicio"
    },
    en:{
        language: "en",
        themeDark: "Dark", 
        themeLight: "Light",
        aboutMe: "About Me",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
        home: "Home"
    }
}

const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts,setTexts] = useState(translations[language]);

    const handleLanguage = (e) =>{
        /*if(e.target.value === "es"){
            setLanguage("es");
            setTexts(translations.es);
        }else{
            setLanguage("en");
            setTexts(translations.en);
        }*/
        if(e.target.checked){
            setLanguage("es");
            setTexts(translations.es);
        }else{
            setLanguage("en");
            setTexts(translations.en);
        }
    };
    const data={texts,handleLanguage};
    return (
        <LanguageContext.Provider value={data}>
        {children}
        </LanguageContext.Provider>)
};

export {LanguageProvider};
export default LanguageContext;