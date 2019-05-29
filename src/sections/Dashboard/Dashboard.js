import React from 'react'
import { connect } from 'react-redux'
import { section } from './Dashboard.scss'

import CreateDeckButton from 'Components/CreateDeckButton/CreateDeckButton'

const Dashboard = () => {
  return (
    <section className={section}>
      <CreateDeckButton/>
    </section>
  )
}

export default connect({})(Dashboard)