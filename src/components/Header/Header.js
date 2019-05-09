import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser } from 'Actions'

const Header = ({ logoutUser, history, authenticated }) => {

  const logoutButton = () => (
    <button onClick={() => { 
      logoutUser() 
      history.push('/login') 
    }}>
      Logout
    </button>
  )

  const authenticatedHeader = () => (
    <div>
      <Link to='/dashboard'>Dashboard</Link>
      {logoutButton()}
    </div>
  )

  const notAuthenticatedHeader = () => (
    <div>
      <Link to='/register'>Sign Up</Link>
      <Link to='/login'>Sign In</Link>
    </div>
  )

  return authenticated ? authenticatedHeader() : notAuthenticatedHeader()
}

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default withRouter(connect(mapStateToProps, { logoutUser })(Header))