import React, { useState } from 'react';
import './Register.css'
import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_URL
function Register({ onSwitchToLogin }) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await axios.post(`${API_BASE}/auth/register`, {
        username,
        password
      });

      setSuccess('Account created! Redirecting to login...');
      setTimeout(() => onSwitchToLogin(), 1500);

    } catch (err) {
      setError(err.response?.data?.detail || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className='register-form'>
        <h3>Register Your Account</h3>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <div className='input-group'>
          <label>User Name :</label>
          <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setusername(e.target.value)} />
        </div>

        <div className='input-group'>
          <label>Password :</label>
          <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>

        <button type='submit' disabled={loading || !username || !password}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <p>Already have an account?</p>
      <button onClick={onSwitchToLogin} style={{ background: 'none', color: 'blue' }}>
        Login here
      </button>
    </div>
  );
}

export default Register;