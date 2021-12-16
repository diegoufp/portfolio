import React, { useContext } from 'react';
import "../css/Contact.css";
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import { useForm } from '../hooks/useForm';


const Contact = () => {
    const {theme} = useContext(ThemeContext);
    const {texts,initialForm,validationsForm,formText} = useContext(LanguageContext);

    const {form,errors,loading,response,handleChange,handleBlur,handleSubmit} = useForm(initialForm,validationsForm);
    return (
        <div className="main__contact">
            <div className={`main__contact-content ${theme}`}>
                <h2>{texts.contact}</h2>
                <form onSubmit={handleSubmit}>
                <input className={theme} type="text" name="name" placeholder={formText.placeholder.name} onBlur={handleBlur} onChange={handleChange} value={form.name} required/>
                {(errors.name === "regex" && <p>{formText.regex.name}</p>)||(errors.name && <p>{formText.required.name}</p>)}

                <input className={theme} type="email" name="email" placeholder={formText.placeholder.email} onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
                {(errors.email === "regex" && <p>{formText.regex.email}</p>)||(errors.email && <p>{formText.required.email}</p>)}

                <input className={theme} type="text" name="subject" placeholder={formText.placeholder.subject} onBlur={handleBlur} onChange={handleChange} value={form.subject} required/>
                {errors.subject && <p>{formText.required.subject}</p>}

                <textarea className={theme} name="comments" cols="50" rows="5" placeholder={formText.placeholder.comments} onBlur={handleBlur} onChange={handleChange} value={form.comments} required></textarea>
                {(errors.comments === "regex" && <p>{formText.regex.comments}</p>)||(errors.comments && <p>{formText.required.comments}</p>)}

                <input className={theme} type="submit" value={formText.placeholder.submit}/>
                </form>
            </div>
        </div>
    )
}

export default Contact;
