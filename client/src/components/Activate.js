import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Activate() {
  let navigate = useNavigate()
  const { activationToken } = useParams()

  const handleActivate = async () => {
    try {
      const res = await axios.post('/user/activate', {
        activationToken: activationToken
      })

      if(res.data.msg.toLowerCase() === 'you account has been activated successfully!') return navigate('/login')

    } catch (err) {
      if(err.response.data.msg.toLowerCase() === 'jwt expired') {
        alert('Your activation key is expired! Please register again!')
      }
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Click to the button bellow to activate you email</h1>
      <button onClick={handleActivate}>Activate</button>
    </div>
  )
}

export default Activate