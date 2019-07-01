import { combineReducers } from 'redux'

import auth  from './auth'
import decks from './decks'
import verbs from './verbs'

export default combineReducers({
  auth,
  decks,
  verbs
})