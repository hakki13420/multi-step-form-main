import React from 'react'
import {useNavigate} from 'react-router-dom'
const PreviewItem = ({title, price, change}) => {

  const navigate=useNavigate()

  const changeClick=()=>{
    navigate(change)
  }
  return (
    <div className='previewItem'>
        <div className="previewItem-left">
            <p className="title">{title}</p>
            <a onClick={changeClick} >Change</a>
        </div>
        <div className="previewItem-right">
            {price}
        </div>
    </div>
  )
}

export default PreviewItem