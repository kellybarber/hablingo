import { combineReducers } from 'redux'

import auth  from './auth'
import verbs from './verbs'

export default combineReducers({
  auth,
  verbs
})