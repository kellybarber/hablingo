import React from 'react'
import { section } from './Dashboard.scss'

import { startSetDecks } from 'Actions/decks'

import Query             from 'Components/Query/Query'
import DashboardDeckList from 'Components/DashboardDeckList/DashboardDeckList'
import CreateDeckButton  from 'Components/CreateDeckButton/CreateDeckButton'

export default function Dashboard() {
  return (
    <Query query={startSetDecks}>
      <section className={section}>
        <DashboardDeckList/>
        <CreateDeckButton/>
      </section>
    </Query>
  )
}