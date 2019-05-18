import React from 'react'
import { Link } from 'react-router-dom'
import { button } from './CreateDeckButton.scss'

export default () => (
  <Link 
    className={button}
    to='/create-deck'
  >
  </Link>
)