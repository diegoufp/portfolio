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
        more:"Más"
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
        stand: "Full Stack Developer",
        more:"More"
    }
}

const slider = {
    es:{
        0:  {img:"../../public/img/slider/myweb.png",
            title:"Mi Portafolio",
            text:"El proyecto que es mi carta de presentación sin duda tiene que estar en mi portafolio de proyectos. En su código fuente se puede ver claramente cuanto se del tema y este portafolio ira creciendo en proporción a mis conocimientos y proyectos",
            git:"https://github.com/diegoufp/portfolio",more:""},
    },
    en:{
    0:  {img:"../../public/img/slider/myweb.png",
        title:"My Portfolio",
        text:"The project that is my cover letter certainly has to be in my portfolio of projects. In its source code you can clearly see how much of the topic and this portfolio will be growing in proportion to my knowledge and projects",
        git:"https://github.com/diegoufp/portfolio",
        more:""},
    }
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

const initialForm = {
    name: "",
    email: "",
    subject:"",
    comments:"" 
};

const translateForm={
    es:{required:{
        name:"El campo 'Nombre' es requerido",
        email: "El campo 'Email' es requerido",
        subject:"El campo 'Asunto a tratar' es requerido",
        comments:"El campo 'Comentarios' es requerido"
    },regex:{
        name: "El campo 'Nombre' solo acepta letras y espacios en blanco",
        email:"El campo 'Email' es incorrecto",
        comments:"El campo 'Comentarios' no debe exceder los 255 caracteres"
        
    },placeholder:{
        name:"Escribe tu nombre",
        email:"Escribe tu email",
        subject:"Asunto a tratar",
        comments:"Escribe tus comentarios",
        submit:"Enviar"
    }},
    en:{required:{
        name:"The 'Name' field is required",
        email:"The 'Email' field is required",
        subject:"The field 'Subject to be addressed' is required",
        comments:"The 'Comments' field is required"
    }, regex:{
        name:"The 'Name' field only accepts letters and blanks",
        email:"The 'Email' field is incorrect",
        comments:"The 'Comments' field must not exceed 255 characters"
    },placeholder:{
        name:"Enter your name",
        email:"Write your email",
        subject:"Issue at hand",
        comments:"Write your comments",
        submit:"Submit"
    }}
}

const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts,setTexts] = useState(translations[language]);
    const [sliderTexts, setSliderText] = useState(slider[language]);
    const [formText, setFormText] = useState(translateForm[language]);

    const handleLanguage = (e) =>{
        if(e.target.checked){
            setLanguage("es");
            setTexts(translations.es);
            setSliderText(slider.es);
            setFormText(translateForm.es);

        }else{
            setLanguage("en");
            setTexts(translations.en);
            setSliderText(slider.en);
            setFormText(translateForm.en);
        }
    };

    const validationsForm = (form) =>{
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
    
    
        if(!form.name.trim()){
            errors.name = true;     
        }else if(!regexName.test(form.name.trim())){
            errors.name = "regex";
        };
    
        if(!form.email.trim()){
            errors.email = true;
        }else if(!regexEmail.test(form.email.trim())){
            errors.email = "regex";
        };
    
        if(!form.subject.trim()){
            errors.subject = true;
        };
        if(!form.comments.trim()){
            errors.comments = true;
        }else if(!regexComments.test(form.comments.trim())){
            errors.comments = "regex";
        }
    
        return errors;
    };
    const data={texts,handleLanguage, icons, sliderTexts,initialForm,validationsForm,formText};
    return (
        <LanguageContext.Provider value={data}>
        {children}
        </LanguageContext.Provider>)
};

export {LanguageProvider};
export default LanguageContext;