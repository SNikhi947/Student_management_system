import React, { useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL

function Login({ onSwitchToRegister, onLoginSuccess }) {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handlesubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await axios.post(`${API_BASE}/auth/login`, {
        username,
        password
      })


      localStorage.setItem('token', response.data.access_token)

      if (onLoginSuccess) onLoginSuccess();

    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail || 'Login failed')
      } else {
        setError('Server not running on port 8000')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handlesubmit} className='register-form'>
          <h3>Sign In To Your Account</h3>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className='input-group'>
            <label>User Name :</label>
            <input
              type='text'
              placeholder='Enter the user name'
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>

          <div className='input-group'>
            <label>Password :</label>
            <input
              type='password'
              placeholder='Enter the password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <br />

          <button
            type='submit'
            disabled={loading || !username || !password}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p>Don't have an account?</p>
        <button
          onClick={onSwitchToRegister}
          style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
        >
          Register here
        </button>
      </div>
    </>
  )
}

export default Login;