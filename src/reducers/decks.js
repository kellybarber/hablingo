import { 
  SET_DECKS, 
  ADD_DECK,
  REMOVE_DECK,
  EDIT_DECK,
  DECK_ERROR
} from 'Actions/types'

const defaultState = {
  decks : [],
  error : ''
}

export default (state=defaultState, { type, payload }) => {
  switch(type) {
    case SET_DECKS:
      return {
        ...state,
        decks : [ ...payload ]
      }
    case ADD_DECK:
      return {
        ...state,
        decks : [
          ...state.decks,
          payload
        ]
      }
    case DECK_ERROR:
      return {
        ...state,
        error : payload
      }
    default: 
      return state
  }
}