import data from '../datas/dataStep1.json'
import FormItem from './FormItem'
import RadioBoxItem from './RadioBoxItem'
import CheckBoxItem from './CheckBoxItem'
import CheckBoxItemCard from './CheckBoxItemCard'
import Preview from './Preview'
import Thank from './Thank'
import { useContext, useState } from 'react'
import { stepsContext } from '../context/stepsContext'
import Footer from './Footer'
import {useLocation} from 'react-router-dom'

const Form = () => {
  const {step}=useContext(stepsContext).state
  const [inputs, setInputs]=useState({
    name:'',
    email:'',
    phone:''
  })

  const [plan, setPlan]=useState('monthly')
  const [abonment, setAbonment]=useState('Arcade')
  const [step3, setStep3]=useState([])
    
  return (
    <div className='form-container'>
      <form className={step===1?'form-column':'form-row'}>
         { step===1
                ?(data.content[step-1].map(item=>(
                  <FormItem  key={item.id} 
                  label={item.label} 
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type} 
                  required
                  inputs={inputs}
                  setInputs={setInputs}
                  />
                  ))
                  )
                  :step===2
                    ?(<>
                      {data.content[step-1][plan].map(item=>(
                      <RadioBoxItem   key={item.id} 
                                      id={item.id} 
                                      label={item.label} 
                                      name={item.name}
                                      price={item.price}
                                      free={item.free}
                                      required       
                                      abonment={abonment}
                                      setAbonment={setAbonment}                
                      />
                      ))
                    }
                      <CheckBoxItem plan={plan} setPlan={setPlan} />
                      </>
                    )
                    :step===3
                      ?(data.content[step-1].map(item=>(
                        <CheckBoxItemCard key={item.id} 
                            id={item.id} 
                            name={item.name}
                            label={item.label}
                            description={item.description}
                            price={item.price}
                            step3={step3}
                            setStep3={setStep3}
                        />
                        ))                    
                        )
                    :step===4
                    ?<Preview/>
                    :step===5
                    ?<Thank/>
                    :''
                  }
      </form>
    {step!==5
        ? <Footer inputs={inputs} 
            plan={plan} 
            abonment={abonment} 
            step3={step3} 
          />
        :''
}
  </div>
  )
}

export default Form