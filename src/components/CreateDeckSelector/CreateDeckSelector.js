import React from 'react'
import { wrapper } from './CreateDeckSelector.scss'

import CreateDeckSearch   from '../CreateDeckSearch/CreateDeckSearch'
import CreateDeckVerbList from '../CreateDeckVerbList/CreateDeckVerbList'

const CreateDeckSelector = () => {
  return (
    <div className={wrapper}>
      <CreateDeckSearch/>
      <CreateDeckVerbList/>
    </div>
  )
}

export default CreateDeckSelector