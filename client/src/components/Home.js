import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const navigate = useNavigate()
  const logout = async () => {
    try {
      await axios.get('/user/logout')
      localStorage.removeItem('firstlogin')
      navigate('/')
    } catch (err) {
      console.log(err.response.data.msg)
    }
  }

  return (
    <div>
        <h1>Home</h1>
        <Link to='/register'>Register</Link>
        <br />
        <Link to='/login'>Login</Link>
        <br />
        { localStorage.getItem('firstlogin') && <button onClick={logout} >Logout</button> }
    </div>
  )
}

export default Home