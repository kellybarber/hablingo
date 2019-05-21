import React from 'react'

const CreateDeckTense = ({ tense, mood, styles : { button }}) => {
  return (
    <button className={button}>
      {tense}
    </button>
  )
}

export default CreateDeckTense