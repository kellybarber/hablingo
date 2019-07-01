import { get, post } from 'Helpers/ajax'
import { 
  SET_DECKS,
  ADD_DECK,
  DECK_ERROR
} from './types'

const success = { success : true }

const setDecks = payload => ({
  type : SET_DECKS,
  payload
})

const addDeck = payload => ({
  type : ADD_DECK,
  payload
})

const deckError = payload => ({
  type : DECK_ERROR,
  payload
})

export const startSetDecks = () => (
  (dispatch, getState) => new Promise(async (resolve, reject) => {
    try {
      const { decks } = await get('/api/decks', { authorization: getState().auth.authenticated })

      dispatch(setDecks(decks))
      dispatch(deckError(''))
      resolve(success)

    } catch (error) {
      console.error('Start Get Decks Error: ', error)
      dispatch(deckError(error.error))
      reject(error)
    }
  })
)

export const startAddDeck = deckData => (
  (dispatch, getState) => new Promise(async (resolve, reject) => {
    try {
      const { deck } = await post('/api/decks/create-deck', 
        { authorization: getState().auth.authenticated },
        deckData
      )

      dispatch(addDeck(deck))
      dispatch(deckError(''))
      resolve(success)

    } catch (error) {
      console.error('Start Add Deck Error: ', error)
      dispatch(deckError(error.error))
      reject(error)
    }
  })
)