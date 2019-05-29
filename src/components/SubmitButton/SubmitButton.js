import React from 'react'
import { submitButton } from './SubmitButton.scss'

const SubmitButton = ({ type='button', callback, children }) => {
  return (
    <button className={submitButton} type={type} onClick={callback}>
      { children }
    </button>
  )
}

export default SubmitButton