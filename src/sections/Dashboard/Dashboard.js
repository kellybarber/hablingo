import React from 'react'
import { connect } from 'react-redux'
import { dashboard } from './Dashboard.scss'

import CreateDeckButton from 'Components/CreateDeckButton/CreateDeckButton'

const Dashboard = ({ verbs }) => {
  return (
    <section className={dashboard}>
      <CreateDeckButton />
    </section>
  )
}

const mapStateToProps = ({ verbs }) => ({ verbs })

export default connect(mapStateToProps)(Dashboard)