import { createContext, useState } from "react";


export const stepsContext= createContext()

export const StepsContextProvider=({children})=>{
    const [state, setState]=useState({
        step:1,
        step1:{name:'', email:'', phone:''},
        errors:{},
        step2:{
            plan:'monthly',
            abonment:'Arcade'
        },
        step3:[]
    })


    return <stepsContext.Provider value={{state, setState}}>
        {children}
    </stepsContext.Provider>
}
