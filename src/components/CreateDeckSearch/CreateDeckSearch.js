import React, { useContext } from 'react'
import { createDeckSearch } from './CreateDeckSearch.scss'

import { ADD_SEARCH }    from 'Actions/types'
import CreateDeckContext from 'Context/createDeck'

const CreateDeckSearch = () => {
  const { dispatch } = useContext(CreateDeckContext)

  return (
    <input 
      className={createDeckSearch} 
      onChange={e => dispatch({ type : ADD_SEARCH, payload : e.target.value })} 
    />
  )
}

export default CreateDeckSearch