import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <button id='btn' onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button