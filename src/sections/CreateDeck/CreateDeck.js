import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { createDeck, form } from './CreateDeck.scss'

import CreateDeckContext from 'Context/createDeck'
import createDeckReducer from 'Reducers/createDeck'

import CreateDeckTitle    from 'Components/CreateDeckTitle/CreateDeckTitle'
import CreateDeckSelector from 'Components/CreateDeckSelector/CreateDeckSelector'
import CreateDeckInfo     from 'Components/CreateDeckInfo/CreateDeckInfo'
import SubmitButton       from 'Components/SubmitButton/SubmitButton'

const CreateDeck = ({ verbs }) => {
  const [ deck, dispatch ] = useReducer(createDeckReducer, { verbs : [] })

  const onSubmit = e => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <CreateDeckContext.Provider value={{ deck, dispatch, verbs }}>
      <section className={createDeck}>
        <form className={form} onSubmit={onSubmit}>
          <CreateDeckTitle/>
          <CreateDeckSelector/>
          <CreateDeckInfo/>
          <SubmitButton type='submit'>
            Create Deck  
          </SubmitButton>
        </form>
      </section>
    </CreateDeckContext.Provider>
  )
}

const mapStateToProps = ({ verbs }) => ({ verbs : Object.keys(verbs) })

export default connect(mapStateToProps)(CreateDeck)