import React, { useState } from 'react'

const CreateDeckTense = ({ tense, mood, handleAddVerb, styles : { button }}) => {
  return (
    <button className={button} onClick={() => handleAddVerb(mood, tense)}>
      {tense}
    </button>
  )
}

export default CreateDeckTense