import React, { useState, useContext } from 'react'
import moods from 'Helpers/moods'
import styles, { createDeckVerb, button, svg, arrow, shelf } from './CreateDeckVerb.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckMood  from '../CreateDeckMood/CreateDeckMood'
import CreateDeckTense from '../CreateDeckTense/CreateDeckTense'

const CreateDeckVerb = ({ verb }) => {
  const { deck, dispatch } = useContext(CreateDeckContext)

  const [ verbSelected, setVerbSelected ] = useState(false)

  return (
    <div className={createDeckVerb}>
      <button className={button} onClick={() => setVerbSelected(!verbSelected)}>
        {verb}
        <svg className={svg}><polygon className={arrow} points="8,5 0,10 0,0"/></svg>
      </button>
      <div className={shelf}>
        {verbSelected && moods.map(({ mood, tenses }) => (
          <CreateDeckMood { ...{ mood, tenses, styles }} key={verb+mood}>
            {(tense, mood) => (
              <CreateDeckTense { ...{ tense, mood, styles }} key={verb+mood+tense}/>
            )}
          </CreateDeckMood>          
        ))}
      </div>
    </div>
  )
}

export default CreateDeckVerb