import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { User, Lock, AlertCircle } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, getDashboardRoute } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await login(email, password)
    
    if (result.success) {
      // Get user role and redirect to appropriate dashboard
      const userRole = email.includes('superadmin') ? 'super_admin' 
                    : email.includes('farmeradmin') ? 'farmer_admin'
                    : 'product_admin'
      navigate(getDashboardRoute(userRole))
    } else {
      setError(result.error)
    }
    
    setLoading(false)
  }

  const demoAccounts = [
    { email: 'superadmin@admin.com', password: 'admin123', role: 'Super Admin' },
    { email: 'farmeradmin@admin.com', password: 'admin123', role: 'Farmer Admin' },
    { email: 'productadmin@admin.com', password: 'admin123', role: 'Product Admin' }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        maxWidth: '900px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Login Form */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              color: '#333',
              marginBottom: '8px'
            }}>
              Admin Dashboard Login
            </h1>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Access your admin dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500',
                color: '#333'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <User style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#666',
                  width: '20px',
                  height: '20px'
                }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 45px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    backgroundColor: '#f8f9fa'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500',
                color: '#333'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#666',
                  width: '20px',
                  height: '20px'
                }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 45px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    backgroundColor: '#f8f9fa'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div style={{
                background: '#fee',
                border: '1px solid #fcc',
                color: '#c33',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '14px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

        {/* Demo Accounts */}
        <div>
          <h3 style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#333',
            marginBottom: '20px'
          }}>
            Demo Accounts
          </h3>
          <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
            Use these demo accounts to test different admin roles:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {demoAccounts.map((account, index) => (
              <div
                key={index}
                style={{
                  background: '#f8f9fa',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onClick={() => {
                  setEmail(account.email)
                  setPassword(account.password)
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#e9ecef'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f8f9fa'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>
                  {account.role}
                </div>
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '2px' }}>
                  Email: {account.email}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Password: {account.password}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b3d9ff',
            borderRadius: '8px',
            padding: '12px',
            marginTop: '16px',
            fontSize: '14px',
            color: '#0066cc'
          }}>
            💡 Click on any demo account above to auto-fill the login form
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login