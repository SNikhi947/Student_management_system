import { useState, useEffect } from 'react'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import First from './Components/First'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsAuth(true)
  }, [])

  if (isAuth) {
    return <Dashboard onLogout={() => setIsAuth(false)} />
  }

  return (
    <div className="form-section">
      <First/>
      {isLogin ? (
        <Login
          onSwitchToRegister={() => setIsLogin(false)}
          onLoginSuccess={() => setIsAuth(true)}
        />
      ) : (
        <Register onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  )
}

export default App