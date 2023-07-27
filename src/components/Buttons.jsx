import { useContext } from 'react'
import { stepsContext } from '../context/stepsContext'
import {useNavigate} from 'react-router-dom'

const Buttons = ({title, type, inputs, plan, abonment, step3}) => {
  const {state}=useContext(stepsContext)
  const {setState}=useContext(stepsContext)
  const {step}=useContext(stepsContext).state
  const navigate = useNavigate()
  let errors={}


  const checkStep2=()=>{
    if(!plan || !abonment) return false
    return true
  }

  const checkErrors=()=>{    
    if(Object.keys(inputs).length===0) return errors={
      name:'this field is required',
      email:'this field is required',
      phone:'this field is required'
    }
        
      if(!inputs.name || /^$/g.test(inputs.name)) errors.name='this field is required'
      if(!inputs.email || /^$/g.test(inputs.email)) errors.email='this field is required'
      if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputs.email)) errors.email='no valid email'
      if(!inputs.phone || /^$/g.test(inputs.phone)) errors.phone='this field is required'
      if(!/^\+[0-9]{1}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/g.test(inputs.phone)) errors.phone='phone number not valid'
    
  }

  const handlClick=(event)=>{    
    event.preventDefault()    
    if(type==='next'){
      switch(step){
        case 1:{
          checkErrors()
          if(Object.keys(errors).length===0) {
            setState({...state, step1:inputs})    
            navigate('/step2')
          }else setState({...state, step1:inputs, errors:errors})    
          break
        }
        case 2:{     
            if(checkStep2()) setState({...state,step2:{plan, abonment}})
            navigate('/step3')
          break
        }
        case 3:{
          setState({...state,step3:[...step3]})
          navigate('/step4')
          break
        }
        case 4:{
          setState({...state})
          navigate('/step5')
          break
        }
      }
    }else{
      switch(step){
        case 2:{          
          navigate('/')
          break
        }
        case 3:{
          navigate('/step2')
          break
        }
        case 4:{
          navigate('/step3')
          break
        }        
        case 5:{
          navigate('/step4')
          break
        }
      }
    }
      //setState({...state, step:state.step-=1})    

  }

  return (
    <button onClick={handlClick} className={type==='next'?'next-button':type==='prev'?'prev-button':''}>
        {title}
    </button>
  )
}

export default Buttons