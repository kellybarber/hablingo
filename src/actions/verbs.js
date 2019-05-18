import { get } from '../helpers/ajax'
import { SET_VERBS } from './types'

const setVerbs = payload => ({
  type : SET_VERBS,
  payload
})

export const startSetVerbs = () => (
  async (dispatch, getState) => {
    try {
      const data = get('/api/verbs', getState().auth.authenticated)

      console.log(data)

    } catch (error) {
      console.error('Start Get Verbs Error: ', error)
    }
  }
)