import { stepsContext} from '../context/stepsContext'
import { useContext, useEffect } from "react"
import {useLocation} from 'react-router-dom'

const Layout = (props) => {
  const location=useLocation()
  const {setState}=useContext(stepsContext)
  const {state}=useContext(stepsContext)


  useEffect(()=>{
    switch(location.pathname){
      case '/':{
        setState({...state, step:1})
        break
      } 
      case '/step2':{
        setState({...state, step:2})
        break
      }
      case '/step3':{
        setState({...state, step:3})
        break
      }
      case '/step4':{
        setState({...state, step:4})
        break
      } 
      case '/step5':{
        setState({...state, step:5})
        break
      }
    }
  },[location.pathname])

  return (
    <div className="layout">
        {props.children}
    </div>
  )
}

export default Layout