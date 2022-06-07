import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FacebookAuth from './Social/FacebookAuth'
import GoogleAuth from './Social/GoogleAuth'

function Register() {
  let navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      var error2 = {
        name: '',
        email: '',
        password: ''
      }

      if(!name) error2.name = 'Please enter a name!'
      if(!email) error2.email = 'Please enter an email!'
      if(!password) error2.password = 'Please enter a password!'
      setError(error2)
      if(!name || !email || !password) return ''

      await axios.post('/user/register', {
        name, email, password
      })      
      navigate('/check')

    } catch (err) {
      var error2 = {
        email: '',
        password: ''
      }
      
      if(err.response.data.msg.toLowerCase() === 'this email is already exist!') error2.email = 'This email is already exist!'
      if(err.response.data.msg.toLowerCase() === 'the password must be at least 6 caracters!') error2.password = 'The password must be at least 6 caracters!'
      setError(error2)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >

        <p style={{ color: 'red' }}>{error.name}</p>
        <div>
          <label htmlFor="name">Name</label>
          <input name='name' type="text" placeholder='Enter your name...' value={name} onChange={e => setName(e.target.value)} />
        </div>

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

        <div>
          <input type="submit" value='Register' />
        </div>      
      </form>

      <div className="socials">
        <GoogleAuth />
        <FacebookAuth />
      </div>
    </div>
  )
}

export default Register