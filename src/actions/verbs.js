import { get } from 'Helpers/ajax'
import { SET_VERBS } from './types'

const setVerbs = payload => ({
  type : SET_VERBS,
  payload
})

export const startSetVerbs = () => (
  (dispatch, getState) => new Promise(async (resolve, reject) => {
    try {
      const { verbs } = await get('/api/verbs', { authorization: getState().auth.authenticated })

      dispatch(setVerbs(verbs))
      resolve()

    } catch (error) {
      console.error('Start Get Verbs Error: ', error)
      reject(error)
    }
  })
)