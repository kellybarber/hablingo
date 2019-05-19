import React, { useState, useContext } from 'react'
import { createDeckVerb, verbButton, svg, arrow } from './CreateDeckVerb.scss'

import CreateDeckContext from 'Context/createDeck'

const CreateDeckVerb = ({ verb }) => {
  const { dispatch } = useContext(CreateDeckContext)


  return (
    <div className={createDeckVerb}>
      <button className={verbButton}>
        {verb}
        <svg className={svg}>
          <polygon className={arrow} points="8,5 0,10 0,0"/>
        </svg>
      </button>
      <div>
        
      </div>
    </div>
  )
}

export default CreateDeckVerb