import React, { Fragment, useState } from 'react'

const CreateDeckMood = ({ mood, tenses, children, styles : { svg, arrow, button } }) => {

  const [ moodSelected, setMoodSelected ] = useState(false)

  return (
    <Fragment>
      <button className={button} onClick={() => setMoodSelected(!moodSelected)}>
        {mood}
        <svg className={svg}><polygon className={arrow} points="8,5 0,10 0,0"/></svg>  
      </button>
      { moodSelected && tenses.map(tense => children(tense, mood)) }
    </Fragment>
  )
}

export default CreateDeckMood