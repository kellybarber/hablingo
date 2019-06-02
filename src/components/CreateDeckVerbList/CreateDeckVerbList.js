import React, { useContext } from 'react'
import { createDeckVerbList } from './CreateDeckVerbList.scss'

import CreateDeckContext from 'Context/createDeck'
import CreateDeckVerb    from '../CreateDeckVerb/CreateDeckVerb'

const CreateDeckVerbList = () => {
  const { deck, verbs } = useContext(CreateDeckContext)

  return (
    <div className={createDeckVerbList}>
      {verbs
        .filter(verb => deck.search ? verb.includes(deck.search) : verb )
        .map((verb, index) => <CreateDeckVerb verb={verb} key={index}/> )}
    </div>
  )
}

export default CreateDeckVerbList