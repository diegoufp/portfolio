import React,{createContext, useState } from "react";


const BurgerContext = createContext();

const initialBurger= "unactivate";

const BurgerProvider = ({children}) =>{
    const [burger, setBurger] = useState(initialBurger);

    const handleBoton = (e) =>{
        if(e.target){
            setBurger("unactivate");
        }
    }

    const handleBurger = (e) =>{
        if(e.target.checked){
            setBurger("activate");
        }else{
            setBurger("unactivate");
        }
    };
    const data ={burger,handleBurger,handleBoton};

    return(
        <BurgerContext.Provider value={data}>{children}</BurgerContext.Provider>
    )
};

export {BurgerProvider};
export default BurgerContext;