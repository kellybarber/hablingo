import React from 'react'
import { connect } from 'react-redux'
import { section } from './Dashboard.scss'

import CreateDeckButton from 'Components/CreateDeckButton/CreateDeckButton'

const Dashboard = ({ verbs }) => {
  return (
    <section className={section}>
      <CreateDeckButton/>
    </section>
  )
}

const mapStateToProps = ({ verbs }) => ({ verbs })

export default connect(mapStateToProps)(Dashboard)