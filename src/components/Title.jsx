import { useContext } from 'react'
import { stepsContext } from '../context/stepsContext'
import data from '../datas/dataStep1.json'

const Title = () => {

  const {step}=useContext(stepsContext).state

  return (
    <div className="title-container">
      <h1 className='title'>{data.title[step-1].title}</h1>
      <p className='description'>{data.title[step-1].description}</p>
    </div>
  )
}

export default Title