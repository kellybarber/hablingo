import React, { Fragment, useCallback, useState, useContext } from 'react'
import { ADD_VERB, REMOVE_VERB } from 'Actions/types'
import moods from 'Helpers/moods'
import styles, { button, svg, svgOpen, arrow, moodShelf } from './CreateDeckVerb.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckMood  from '../CreateDeckMood/CreateDeckMood'
import CreateDeckTense from '../CreateDeckTense/CreateDeckTense'

const CreateDeckVerb = ({ verb }) => {
  const { deck, dispatch } = useContext(CreateDeckContext)
  const [ verbSelected, setVerbSelected ] = useState(false)

  const addVerb = (mood, tense) => {
    // const verbExists = deck.some(entry => (
    //   entry.infinitive === verb &&
    //   entry.mood       === mood &&
    //   entry.tense      === tense
    // ))

    // if (!verbExists) {
      dispatch({ 
        type    : ADD_VERB, 
        payload : { infinitive : verb, mood, tense } 
      })
    // }

    // if (verbExists) dispatch({ 
    //   type    : REMOVE_VERB, 
    //   payload : { infinitive : verb, mood, tense } 
    // })
  }

  return (
    <Fragment>
      <button 
        className={`${button}`} 
        onClick={() => setVerbSelected(!verbSelected)}
      >
        {verb}
        <svg className={`${svg} ${verbSelected && svgOpen}`}>
          <polygon className={arrow} points="8,5 0,10 0,0"/>
        </svg>
      </button>
      <div className={moodShelf}>
        {verbSelected && moods.map(({ mood, tenses }) => (
          <CreateDeckMood { ...{ mood, tenses, styles }} key={verb+mood}>
            {(tense, mood) => (
              <CreateDeckTense { ...{ tense, mood, addVerb, styles }} key={verb+mood+tense}/>
            )}
          </CreateDeckMood>          
        ))}
      </div>
    </Fragment>
  )
}

export default CreateDeckVerb