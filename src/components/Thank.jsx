import React from 'react'
import image from '../assets/images/icon-thank-you.svg'

const Thank = () => {
  return (
    <div className='thank'>
        <img src={image} alt="thank-you-image" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thank