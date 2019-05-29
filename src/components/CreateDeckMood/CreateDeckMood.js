import React, { Fragment, useState } from 'react'
import { moodButton } from './CreateDeckMood.scss'

const CreateDeckMood = ({ mood, tenses, children, styles : { svg, svgOpen, arrow, button } }) => {

  const [ moodSelected, setMoodSelected ] = useState(false)

  return (
    <Fragment>
      <button
        className={`${button} ${moodButton}`} 
        type='button'
        onClick={() => setMoodSelected(!moodSelected)}
      >
        {mood}
        <svg className={`${svg} ${moodSelected && svgOpen}`}>
          <polygon className={arrow} points="8,5 0,10 0,0"/>
        </svg>  
      </button>
      <div>
        {moodSelected && tenses.map(tense => children(tense, mood))}
      </div>
    </Fragment>
  )
}

export default CreateDeckMood