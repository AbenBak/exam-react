import { useState } from 'react'
import kfc from './../../assets/kfc-4.svg'
import './Auth.css'
function Auth() {

  return (
    <>
    <div className="auth-box">
        <fieldset>
            <legend>Authorization</legend>
            <label>Login</label>
            <input type="text" /><br />
            <label>Password</label>
            <input type="password" /><br />
            <button>Login</button>
        </fieldset>
    </div>

    </>
  )
}

export default Auth
