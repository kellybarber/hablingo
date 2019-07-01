import React, { 
  useState, 
  useEffect
} from 'react'
import { connect } from 'react-redux'

const Loading = () => (
  <div>
    ...Loading
  </div>
)

const Query = ({ query, dispatch, children }) => {

  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    (async () => {
      const status = await dispatch(query())
      if (!status.error) setLoading(false)
    })()
  }, [])

  if (loading) 
    return <Loading />
  else 
    return children
}

export default connect()(Query)