import React, { useContext } from 'react'
import { REMOVE_VERB } from 'Actions/types'
import { createDeckInfoEntry, buttonText } from './CreateDeckInfoEntry.scss'

import CreateDeckContext from 'Context/createDeck'

const CreateDeckInfoEntry = ({ infinitive, mood, tense }) => {
  const { dispatch } = useContext(CreateDeckContext)

  const removeVerb = () => dispatch({
    type    : REMOVE_VERB,
    payload : { infinitive, mood, tense } 
  })
  
  return (
    <button className={createDeckInfoEntry} type='button' onClick={removeVerb}>
      <span className={buttonText}>{infinitive}</span>
      <span>&times;</span>
    </button>
  )
}

export default CreateDeckInfoEntry