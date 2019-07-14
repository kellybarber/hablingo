import React, { createRef } from 'react'
import { 
  dashboardDeck,
  heading
} from './DashboardDeck.scss'

import longPress from 'Hooks/longPress'

import DashboardDeckOptions from 'Components/DashboardDeckOptions/DashboardDeckOptions'

const DashboardDeck = ({ title }) => {
  
  const deckRef  = createRef()
  const editable = longPress(() => deckRef.current)

  return (
    <div ref={deckRef} className={dashboardDeck}>
      <h2 className={heading}>
        {title}
      </h2>
      <DashboardDeckOptions/>
    </div>
  )
}

export default DashboardDeck