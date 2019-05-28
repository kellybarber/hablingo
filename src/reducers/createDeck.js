import { ADD_VERB, REMOVE_VERB } from 'Actions/types'

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_VERB:
      return [ ...state, payload ]
    case REMOVE_VERB:
      return state.filter(entry => !(
          entry.infinitive === payload.infinitive &&
          entry.mood       === payload.mood &&
          entry.tense      === payload.tense
      ))
    default:
      return state
  }
}