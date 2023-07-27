import SideBarItem from "./SideBarItem"
import data from '../datas/dataStep1.json'
import { useContext } from "react"
import { stepsContext } from "../context/stepsContext"

const SideBar = () => {


  const {step}=useContext(stepsContext).state
  return (
    <div className='aside-wrapper'>
        <div className="aside">
          {data.sidebar.map(item=>(
            <SideBarItem  key={item.id} 
                          id={item.id} 
                          step ={step}
                          stepNumber={item.id}
                          title={item.title}
                          description={item.description}
            />
          ))}            
        </div>
    </div>
  )
}

export default SideBar