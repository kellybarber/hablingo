import React from 'react'
import { connect } from 'react-redux'
import { dashboardDeckOptions, iconButton } from './DashboardDeckOptions.scss'

import EditIcon   from 'Assets/svg/edit'
import DeleteIcon from 'Assets/svg/delete'

const DashboardDeckOptions = () => {
  return (
    <div className={dashboardDeckOptions} > 
      <button className={iconButton} >
        <EditIcon />
      </button>
      <button className={iconButton} >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default connect()(DashboardDeckOptions)