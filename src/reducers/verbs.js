import { SET_VERBS } from 'Actions/types'

export default (state={}, { type, payload }) => {
  switch(type) {
    case SET_VERBS:
      return { state : payload }
    default: 
      return state
  }
}