import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { createDeck } from './CreateDeck.scss'

import CreateDeckContext from 'Context/createDeck'
import createDeckReducer from 'Reducers/createDeck'

import CreateDeckSelector from 'Components/CreateDeckSelector/CreateDeckSelector'
import CreateDeckInfo     from 'Components/CreateDeckInfo/CreateDeckInfo'

const CreateDeck = ({ verbs }) => {
  const [ deck, dispatch ] = useReducer(createDeckReducer, [])

  return (
    <CreateDeckContext.Provider value={{ deck, dispatch, verbs }}>
      <section className={createDeck}>
        <CreateDeckSelector/>
        <CreateDeckInfo/>
      </section>
    </CreateDeckContext.Provider>
  )
}

const mapStateToProps = ({ verbs }) => ({ verbs : Object.keys(verbs) })

export default connect(mapStateToProps)(CreateDeck)