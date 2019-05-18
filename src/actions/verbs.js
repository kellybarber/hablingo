import { get } from '../helpers/ajax'
import { SET_VERBS } from './types'

const setVerbs = payload => ({
  type : SET_VERBS,
  payload
})

export const startSetVerbs = () => (
  async (dispatch, getState) => {
    try {
      const { verbs } = await get('/api/verbs', { authorization: getState().auth.authenticated })

      dispatch(setVerbs(verbs))

    } catch (error) {
      console.error('Start Get Verbs Error: ', error)
    }
  }
)