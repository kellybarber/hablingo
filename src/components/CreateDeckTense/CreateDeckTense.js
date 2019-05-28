import React, { useState } from 'react'
import { tenseButton }    from './CreateDeckTense.scss'

const CreateDeckTense = ({ tense, mood, addVerb, styles : { button }}) => {
  

  return (
    <button 
      className={`${button} ${tenseButton}`} 
      onClick={() => addVerb(mood, tense)}
    >
      {tense}
    </button>
  )
}

export default CreateDeckTense