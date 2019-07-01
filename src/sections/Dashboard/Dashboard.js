import React from 'react'
import { connect } from 'react-redux'
import { section } from './Dashboard.scss'

import { startSetDecks } from 'Actions/decks'

import Query            from 'Components/Query/Query'
import CreateDeckButton from 'Components/CreateDeckButton/CreateDeckButton'

const Dashboard = () => {
  return (
    <Query query={startSetDecks}>
      <section className={section}>
        <CreateDeckButton/>
      </section>
    </Query>
  )
}

export default connect()(Dashboard)