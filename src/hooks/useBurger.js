import {useState} from "react";



const initialBurger= "unactivate";

export const useBurger = (ref) =>{
    const [burger, setBurger] = useState(initialBurger);

    const handleBoton = (e) =>{
        if(e.target){
            setBurger("unactivate");
            ref.current.checked = false;
        }
    }

    const handleBurger = (e) =>{
        if(e.target.checked){
            setBurger("activate");
        }else{
            setBurger("unactivate");
        }
    };
    

    return {burger,handleBurger,handleBoton}
};
