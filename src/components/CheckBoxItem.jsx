import { useContext, useEffect, useState } from "react"
import { stepsContext } from "../context/stepsContext"


const CheckBoxItem = ({plan, setPlan}) => {
  
  const step2=useContext(stepsContext).state.step2

  const handlChange=(event)=>{
    setPlan(plan==="monthly"?"yearly":"monthly")
  }

  useEffect(()=>{
    setPlan(step2.plan)
  },[])

  return (
    <div className="checkBoxItem">
      <label htmlFor="plan-duration">        
        <input  onChange={handlChange} 
                value={plan} 
                id="plan-duration" 
                name="plan-duration" 
                type="checkbox" 
                checked={plan==="yearly"}
        />
        <div className="outer">
          <div className="inner">
          </div>
        </div>
      </label>
    </div>
  )
}

export default CheckBoxItem