import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from 'Actions'

const Register = ({ startRegisterUser, errorMessage }) => {

  const [ email, setEmail ]      = useState('')
  const [ password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    startRegisterUser({ email, password })
  }

  return (
    <div className='entry__container'>
    <h1>Create Your Account</h1>
    <form onSubmit={onSubmit}>
      <input 
        placeholder='Email' 
        name='email' 
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        placeholder='Password' 
        name='password' 
        type='password' 
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
    <div>{errorMessage}</div>
  </div>
  )
}

const mapStateToProps = ({ auth: { authenticated }}) => ({ authenticated })

export default connect(mapStateToProps, { startRegisterUser })(Register)