import Buttons from './Buttons'
import data from '../datas/dataStep1.json'
import { useContext } from 'react'
import { stepsContext } from '../context/stepsContext'

const Footer = ({inputs, plan , abonment, step3}) => {
  const {step}=useContext(stepsContext).state

  return (
    <div className="footer">
      {data.buttons[step-1] && data.buttons[step-1].map(btn=>(
        <Buttons  key={btn.id} 
                  title={btn.title} 
                  type={btn.type}
                  inputs={inputs} 
                  plan={plan} 
                  abonment={abonment} 
                  step3={step3}
        />
      ))}
    </div>
  )
}

export default Footer