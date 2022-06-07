import axios from 'axios';
import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';

function FacebookAuth() {
    const navigate = useNavigate()

    const responseFacebook = async (response) => {
        const { accessToken, userID } = response
        try {
            await axios.post('/user/facebook_login', { accessToken, userID })
            localStorage.setItem('firstlogin', true)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </div>
    )
}

export default FacebookAuth;