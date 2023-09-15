import React from 'react'
import { GoogleLogin } from '../src/index'
const clientId = '847828404940-lgovncjhgggvorptvqpvpabg30uc8mt7.apps.googleusercontent.com'
export default () => (
  <div className='main' style={{ width: "100%", height: "100vh" }}>
    <GoogleLogin
      clientId={clientId}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} type="button" class="login-with-google-btn" >
          Sign in with Google
        </button>
      )}
      buttonText="Login"
      onSuccess={console.log}
      onFailure={console.log}
      cookiePolicy={'single_host_origin'}
    />
  </div>
)
