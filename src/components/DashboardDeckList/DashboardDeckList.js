import React from 'react'
import { connect } from 'react-redux'
import { dashboardDeckList } from './DashboardDeckList.scss'

import DashboardDeck from 'Components/DashboardDeck/DashboardDeck'

const DashboardDeckList = ({ decks }) => {
  return (
    <div className={dashboardDeckList}>
      {decks.map((deck, index) => (
        <DashboardDeck {...deck} key={index} />
      ))}
    </div>
  )
}

const mapStateToProps = ({ decks }) => ({ decks : decks.decks })

export default connect(mapStateToProps)(DashboardDeckList)
