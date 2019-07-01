import React, { 
  useState, 
  useEffect
} from 'react'
import { connect } from 'react-redux'

import Loader from 'Components/Loader/Loader'

const Query = ({ query, dispatch, children }) => {

  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    (async () => {
      const status = await dispatch(query())
      if (!status.error) setLoading(false)
    })()
  }, [])

  if (loading) 
    return <Loader />
  else 
    return children
}

export default connect()(Query)