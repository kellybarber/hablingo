import React, { useEffect, useState, useContext } from 'react'
import { createDeckInfo, verbListContainer, verbListSection, verbListTitle } from './CreateDeckInfo.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckInfoEntry from '../CreateDeckInfoEntry/CreateDeckInfoEntry'

const CreateDeckInfo = () => {
  const { deck } = useContext(CreateDeckContext)
  const [ verbList, setVerbList ] = useState({})

  useEffect(() => {
    let sortedVerbs = {}

    deck.verbs.forEach(({ infinitive, mood, tense }) => {
      sortedVerbs = {
        ...sortedVerbs,
        [mood] : {
          ...sortedVerbs[mood],
          [tense] : [
            ...(sortedVerbs[mood] && sortedVerbs[mood][tense] ? sortedVerbs[mood][tense] : []),
            infinitive
          ]
        }
      }
    })

    setVerbList(sortedVerbs)

  }, [deck])

  return (
    <div className={createDeckInfo}>
      <div className={verbListContainer}>
        { Object.keys(verbList).map(mood => (
          Object.keys(verbList[mood]).map(tense => (
            <div className={verbListSection} key={mood+tense}>
              <h2 className={verbListTitle}>{`${mood} / ${tense}`}</h2>
              { verbList[mood][tense].map((infinitive, index) => <CreateDeckInfoEntry {...{infinitive, mood, tense}} key={index} />) }
            </div>
          ))
        )) }
      </div>
    </div>
  )
}

export default CreateDeckInfo