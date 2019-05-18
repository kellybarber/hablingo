import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser } from 'Actions'
import { header } from './Header.scss'

const Header = ({ logoutUser, history, authenticated }) => {

  const HeaderWrapper = props => (
    <header className={header}>
      { props.children }
    </header>
  )

  const LogoutButton = () => (
    <button onClick={() => { logoutUser(); history.push('/login'); }}>
      Logout
    </button>
  )

  const authenticatedHeader = () => (
    <HeaderWrapper>
      <Link to='/dashboard'>Dashboard</Link>
      <LogoutButton/>
    </HeaderWrapper>
  )

  const notAuthenticatedHeader = () => (
    <HeaderWrapper>
      <Link to='/register'>Sign Up</Link>
      <Link to='/login'>Sign In</Link>
    </HeaderWrapper>
  )

  return authenticated ? authenticatedHeader() : notAuthenticatedHeader()
}

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default withRouter(connect(mapStateToProps, { logoutUser })(Header))