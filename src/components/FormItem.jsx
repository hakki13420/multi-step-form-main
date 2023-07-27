import { useContext, useEffect } from "react"
import { stepsContext } from "../context/stepsContext"

const FormItem = ({label, name, type, placeholder, required,inputs, setInputs}) => {

  const {errors}=useContext(stepsContext).state
  const inputsContext=useContext(stepsContext).state.step1
  const {setState}=useContext(stepsContext)

  useEffect(()=>{
    setInputs(inputsContext)
  },[])


  const handlChange=(event)=>{
    setInputs({...inputs,[event.target.name]:event.target.value})
  }

  Object.keys(errors).length && setTimeout(() => {
    setState(state=>({...state,errors:{}}))
  }, 4000);

  return (
    <div className="formItem">        
        <div className="meta">
            <label htmlFor={name} >{label}</label>
            {Object.keys(errors).length!==0 
              && 
              <span className="error">
                {errors[name]}
              </span>}
        </div>
        <input  onChange={handlChange} 
                className={!errors[name] ?'input-field':'input-field input-error'}
                id={name} 
                name={name} 
                value={inputs[name]}
                type={type} 
                placeholder={placeholder} 
                required={required} 
            />
    </div>
  )
}

export default FormItem