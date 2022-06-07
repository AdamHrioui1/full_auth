import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GoogleAuth() {
    const navigate = useNavigate()

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_SERVICES_CLIENT_ID,
                scope: 'email',
            })
        }
        
        gapi.load('client:auth2', start);
    }, [])

    const responseGoogle = async (response) => {
        console.log('response: ', response)
        try {
            await axios.post('/user/google_login', { tokenId: response.tokenId })
            localStorage.setItem('firstlogin', true)
            navigate('/')
        } catch (err) {
          console.log(err.response.data.msg)
        }
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_SERVICES_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GoogleAuth