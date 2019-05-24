import React, { useState, useContext } from 'react'
import { ADD_VERB, REMOVE_VERB } from 'Actions/types'
import moods from 'Helpers/moods'
import 
  styles, { createDeckVerb, button, buttonGreen, svg, arrow, shelf } 
from './CreateDeckVerb.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckMood  from '../CreateDeckMood/CreateDeckMood'
import CreateDeckTense from '../CreateDeckTense/CreateDeckTense'

const CreateDeckVerb = ({ verb }) => {
  const { deck, dispatch } = useContext(CreateDeckContext)
  const [ verbSelected, setVerbSelected ] = useState(false)

  const isInDeck = deck.some(({ infinitive }) => infinitive === verb)

  const handleAddVerb = (mood, tense) => {
    const exists = deck.some(entry => (
      entry.infinitive === verb &&
      entry.mood       === mood &&
      entry.tense      === tense
    ))

    if (!exists) dispatch({ 
      type    : ADD_VERB, 
      payload : { infinitive : verb, mood, tense } 
    })

    if (exists) dispatch({ 
      type    : REMOVE_VERB, 
      payload : { infinitive : verb, mood, tense } 
    })
  }

  return (
    <div className={createDeckVerb}>
      <button 
        className={`${button} ${isInDeck && buttonGreen}`} 
        onClick={() => setVerbSelected(!verbSelected)}
      >
        {verb}
        <svg className={svg}><polygon className={arrow} points="8,5 0,10 0,0"/></svg>
      </button>
      <div className={shelf}>
        {verbSelected && moods.map(({ mood, tenses }) => (
          <CreateDeckMood { ...{ mood, tenses, isInDeck, styles }} key={verb+mood}>
            {(tense, mood) => (
              <CreateDeckTense { ...{ tense, mood, handleAddVerb, styles }} key={verb+mood+tense}/>
            )}
          </CreateDeckMood>          
        ))}
      </div>
    </div>
  )
}

export default CreateDeckVerb