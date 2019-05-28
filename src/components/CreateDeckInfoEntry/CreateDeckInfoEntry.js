import React, { useContext } from 'react'
import { createDeckInfoEntry, verbInfinitive, verbMood, verbTense } from './CreateDeckInfoEntry.scss'

import CreateDeckContext from 'Context/createDeck'

const CreateDeckInfoEntry = ({ infinitive, mood, tense }) => {
  const { dispatch } = useContext(CreateDeckContext)
  
  return (
    <button className={createDeckInfoEntry}>
      <span>{infinitive}</span>
      <span>{mood}</span>
      <span>{tense}</span>
      <span>&times;</span>
    </button>
  )
}

export default CreateDeckInfoEntry