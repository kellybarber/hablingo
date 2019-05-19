import React from 'react'
import { createDeckSelector } from './CreateDeckSelector.scss'

import CreateDeckSearch   from '../CreateDeckSearch/CreateDeckSearch'
import CreateDeckVerbList from '../CreateDeckVerbList/CreateDeckVerbList'

const CreateDeckSelector = () => {
  return (
    <div className={createDeckSelector}>
      <CreateDeckSearch/>
      <CreateDeckVerbList/>
    </div>
  )
}

export default CreateDeckSelector