import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ResetPassword() {
  const { accesstoken } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  })
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      var error2 = {
        password: '',
        confirmPassword: ''
      }
    
      if(!password) error2.password = 'Please enter your new password!'
      if(!confirmPassword) error2.confirmPassword = 'Please confirm your password!'
      if(password !== confirmPassword) error2.confirmPassword = 'Should be the same of the password!'
      setError(error2)
      if(!password || !confirmPassword) return ''

      await axios.post('/user/reset', { password, confirmPassword }, {
        headers: {
          'Authorization': accesstoken
        }
      })
      navigate('/')

    } catch (err) {
      var error2 = {
        password: '',
        confirmPassword: ''
      }
      
      if(err.response.data.msg.toLowerCase() === 'the password should be at least 6 caracters!') error2.password = 'The password should be at least 6 caracters!'
      if(!confirmPassword) error2.confirmPassword = 'Please confirm your password!'
      if(password !== confirmPassword) error2.confirmPassword = 'Should be the same of the password!'
      setError(error2)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p style={{ color: 'red' }}>{error.password}</p>
        <div>
          <label htmlFor="password">Password</label>
          <input name='password' id='password' type="password" placeholder='Enter new password...' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        
        <p style={{ color: 'red' }}>{error.confirmPassword}</p>
        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input name='confirmPassword' id='confirmPassword' type="password" placeholder='Confirm password...' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        
        <div>
          <input type="submit" value='Reset password' />
        </div>
      </form>
    </div>
  )
}

export default ResetPassword