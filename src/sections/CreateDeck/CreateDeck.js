import React, { useReducer } from 'react'
import { connect }           from 'react-redux'
import { withRouter}         from 'react-router-dom'
import { createDeck, form }  from './CreateDeck.scss'

import CreateDeckContext from 'Context/createDeck'
import createDeckReducer from 'Reducers/createDeck'
import { startAddDeck }  from 'Actions/decks'
import { RESET_REDUCER } from 'Actions/types'

import CreateDeckTitle    from 'Components/CreateDeckTitle/CreateDeckTitle'
import CreateDeckSelector from 'Components/CreateDeckSelector/CreateDeckSelector'
import CreateDeckInfo     from 'Components/CreateDeckInfo/CreateDeckInfo'
import SubmitButton       from 'Components/SubmitButton/SubmitButton'

const defaultState = { 
  title : '', 
  verbs : [] 
}

const CreateDeck = ({ verbs, startAddDeck, history }) => {
  const [ deck, dispatch ] = useReducer(createDeckReducer, defaultState)

  const onSubmit = async e => {
    e.preventDefault()

    const added = await startAddDeck(deck)
    if (!added.error) {
      dispatch({ type : RESET_REDUCER })
      history.push('/dashboard')
    }
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

export default withRouter(connect(mapStateToProps, { startAddDeck })(CreateDeck))