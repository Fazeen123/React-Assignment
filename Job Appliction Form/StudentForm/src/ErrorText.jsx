import React from 'react'
import './ErrorTex.css'

const ErrorText = (props) => {
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default ErrorText
