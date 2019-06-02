import { ADD_TITLE, ADD_SEARCH, ADD_VERB, REMOVE_VERB } from 'Actions/types'

export default (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_TITLE: 
      return {
        ...state,
        title : payload
      }
    case ADD_SEARCH: 
      return {
        ...state,
        search : payload
      }
    case ADD_VERB:
      return {
        ...state,
        verbs : [ ...state.verbs, payload ]
      }
    case REMOVE_VERB:
      return {
        ...state,
        verbs : state.verbs.filter(entry => !(
          entry.infinitive === payload.infinitive &&
          entry.mood       === payload.mood &&
          entry.tense      === payload.tense
        ))
      }
    default:
      return state
  }
}