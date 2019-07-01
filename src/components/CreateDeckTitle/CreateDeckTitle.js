import React, { useContext } from 'react'
import { createDeckTitle, titleInput } from './CreateDeckTitle.scss'

import { ADD_TITLE }     from 'Actions/types'
import CreateDeckContext from 'Context/createDeck'

const CreateDeckTitle = () => {
  const { deck, dispatch } = useContext(CreateDeckContext)

  return (
    <div className={createDeckTitle}>
      <input 
        className={titleInput} 
        placeholder='Title'
        value={deck.title}
        onChange={e => dispatch({ type : ADD_TITLE, payload : e.target.value })}  
      />
    </div>
  )
}

export default CreateDeckTitle