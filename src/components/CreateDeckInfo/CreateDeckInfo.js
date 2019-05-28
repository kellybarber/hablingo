import React, { useContext } from 'react'
import { createDeckInfo } from './CreateDeckInfo.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckInfoEntry from '../CreateDeckInfoEntry/CreateDeckInfoEntry'

const CreateDeckInfo = () => {
  const { deck } = useContext(CreateDeckContext)

  return (
    <div className={createDeckInfo}>
      <input />
      <div>
        { deck.map((entry, index) => <CreateDeckInfoEntry {...entry} key={index} />)}
      </div>
    </div>
  )
}

export default CreateDeckInfo