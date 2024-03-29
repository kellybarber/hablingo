import { AUTH_USER, AUTH_ERROR } from 'Actions/types'

export default (state={}, { type, payload }) => {
  switch(type) {
    case AUTH_USER:
      return { ...state, authenticated : payload }
    case AUTH_ERROR:
      return { ...state, errorMessage : payload }
    default: 
      return state
  }
}