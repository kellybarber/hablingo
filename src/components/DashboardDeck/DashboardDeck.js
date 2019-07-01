import React from 'react'
import { 
  dashboardDeck,
  heading
} from './DashboardDeck.scss'

const DashboardDeck = ({ title }) => {
  return (
    <div className={dashboardDeck}>
      <h2 className={heading}>
        {title}
      </h2>
    </div>
  )
}

export default DashboardDeck