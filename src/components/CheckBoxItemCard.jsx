import { useContext, useEffect, useState } from "react"
import { stepsContext } from "../context/stepsContext"

const CheckBoxItemCard = ({id, name, label, description, price, step3, setStep3}) => {

  const checkedContext=useContext(stepsContext).state.step3

  const handlChange=(event)=>{
    if(event.target.checked) setStep3([...step3, event.target.value])
    else setStep3(step3.filter(el=>el!==event.target.value))
  }

  useEffect(()=>{
    setStep3(checkedContext)
  },[])
  
  return (
    <div className="checkBoxItemCard">
      <label htmlFor={`${name}+${id}`}>        
        <input  onChange={handlChange} 
                id={`${name}+${id}`}                
                type="checkbox"  
                value={label}        
                checked={step3 && step3.some(el=>el===label)}       
        />
        <div className="add-on-info">
          <div className="add-on-info-left">
            <span className="add-on-name">{label}</span>
            <span className="add-on-desc">{description}</span>
          </div>
          <div className="add-on-info-right">{price}</div>
        </div>
      </label>
    </div>
  )
}

export default CheckBoxItemCard