import React, { useEffect, useState, useContext } from 'react'
import { createDeckInfo, verbListContainer } from './CreateDeckInfo.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckInfoEntry from '../CreateDeckInfoEntry/CreateDeckInfoEntry'

const CreateDeckInfo = () => {
  const { deck } = useContext(CreateDeckContext)
  const [ verbList, setVerbList ] = useState({})

  useEffect(() => {
    deck.verbs.forEach(({ infinitive, mood, tense }) => {
      setVerbList({
        ...verbList,
        [mood] : {
          ...verbList[mood],
          [tense] : [
            ...(verbList[mood] && verbList[mood][tense] ? verbList[mood][tense] : []),
            infinitive
          ]
        }
      })
    })
  }, [deck])

  return (
    <div className={createDeckInfo}>
      <div className={verbListContainer}>
        { deck.verbs.map((entry, index) => <CreateDeckInfoEntry {...entry} key={index} />)}
      </div>
    </div>
  )
}

export default CreateDeckInfo