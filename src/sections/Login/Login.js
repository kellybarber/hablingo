import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startLoginUser } from 'Actions'

const Login = ({ startLoginUser, errorMessage }) => {

  const [ email, setEmail ]      = useState('')
  const [ password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    startLoginUser({ email, password })
  }

  return (
    <div className='entry__container'>
        <h1>Welcome Back!</h1>
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
          <button>Login</button>
        </form>
        <div>{errorMessage}</div>
      </div>
  )
}

const mapStateToProps = ({ auth: { errorMessage }}) => ({ errorMessage })

export default connect(mapStateToProps, { startLoginUser })(Login)