import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    password: ''
  })
  
  const handleSubmit = async e => {
    e.preventDefault()
    
    try {
      var error2 = {
        email: '',
        password: ''
      }

      if(!email) error2.email = 'Please enter an email!'
      if(!password) error2.password = 'Please enter a password!'
      setError(error2)
      if(!email || !password) return ''

      await axios.post('/user/login', {
        email, password
      })
      navigate('/')

    } catch (err) {
      var error2 = {
        email: '',
        password: ''
      }
      
      if(err.response.data.msg.toLowerCase() === 'this email does not exist!') error2.email = 'This email does not exist!'
      if(err.response.data.msg.toLowerCase() === 'incorrect password!') error2.password = 'Incorrect password!'
      setError(error2)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >

        <p style={{ color: 'red' }}>{error.email}</p>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type="email" placeholder='Enter your email...' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        
        <p style={{ color: 'red' }}>{error.password}</p>
        <div>
          <label htmlFor="password">Password</label>
          <input name='password' type="password" placeholder='Enter your password...' value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <Link to='/forgotpassword' >Forgot password</Link>
        <br />
        <Link to='/register' >Register</Link>

        <div>
          <input type="submit" value='Login' />
        </div>      
      </form>
    </div>
  )
}

export default Login