import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      if(!email) return setError('Please enter your email!')

      await axios.post('/user/forgot', {
        email: email
      })
      navigate('/checkforpassword')

    } catch (err) {
      if(err.response.data.msg.toLowerCase() === 'this email does not exist!') return setError('This email does not exist!')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p style={{ color: 'red' }}>{error}</p>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type="email" placeholder='Enter your email...' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div>
          <input type='submit' value='Send' />
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword