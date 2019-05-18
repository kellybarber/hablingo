import { ADD_VERB } from 'Actions/types'

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_VERB:
      return [ ...state, payload ]
    default:
      return state
  }
}