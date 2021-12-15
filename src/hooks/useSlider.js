import { useState } from 'react';

export const useSlider = (obj) =>{
    const [slider, setSlider] = useState(0);
    const PAGE = obj;

    const handleSlider = (e) =>{

        if(e.target.value === "left"){
            if(0 === slider){
                setSlider(PAGE - 1);
            }else{
                setSlider(slider - 1);
            }     
        }else if(e.target.value === "right"){
            if(PAGE - 1 === slider){
                setSlider(0);
            }else{
                setSlider(slider + 1);
            }
            
        }
    }


    return{slider,handleSlider}
}
