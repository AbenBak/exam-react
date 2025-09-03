import './Auth.css'

function Auth({ onClose }) {
  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <button className="auth-close" onClick={onClose}>×</button>
        <fieldset>
          <legend>Authorization</legend>
          <label>Login</label>
          <input type="text" /><br />
          <label>Password</label>
          <input type="password" /><br />
          <button>Login</button>
        </fieldset>
      </div>
    </div>
  )
}

export default Auth
