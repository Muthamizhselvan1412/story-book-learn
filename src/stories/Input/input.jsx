import React from 'react'
import './input.css'
import '../../index.css'

const Input = (props) => {
    const {varient='medium', placeholder,error, backgroundColor, ...rest} =props;
  return (
    <input type="text" className={`input bg-gray-200 ${varient} ${error}`} {...rest} placeholder={placeholder}/>      
  )
}

export default Input