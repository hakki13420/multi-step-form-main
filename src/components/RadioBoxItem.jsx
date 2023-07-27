/* eslint-disable no-undef */
import image1 from '../assets/images/icon-arcade.svg'
import image2 from '../assets/images/icon-advanced.svg'
import image3 from '../assets/images/icon-pro.svg'
import { useContext, useEffect } from 'react'
import { stepsContext } from '../context/stepsContext'

const RadioBoxItem = ({id, label, name, price, free, abonment, setAbonment}) => {

  const step2=useContext(stepsContext).state.step2

  const handlChange=(event)=>{
    setAbonment(event.target.value)
  }

  useEffect(()=>{
    setAbonment(step2.abonment)
  },[])

  return (
    <div className="RadioBoxItem">        
      <input  id={id} 
              name={name} 
              value={label}
              type="radio" 
              onChange={handlChange}
      />
      <label  htmlFor={id} 
              className={abonment===label?'input-checked-label':''}
       > 
      <img src={id===1?image1:id===2?image2:image3} alt={'icon'+id} />
      <div className="planInfo">
        <span className='planName'>{label}</span>      
        <span className='planPrice'>{price}</span>      
        {free && <span className='planFree'>{free}</span>}
      </div>
       </label>     
    </div>
  )
}

export default RadioBoxItem