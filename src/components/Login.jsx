import React, { useState } from 'react'

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'super_admin'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mock authentication - in real app, this would be an API call
    const mockUsers = {
      super_admin: { username: 'superadmin', password: 'admin123', role: 'super_admin', name: 'Super Admin' },
      farmer_admin: { username: 'farmeradmin', password: 'admin123', role: 'farmer_admin', name: 'Farmer Admin' },
      product_admin: { username: 'productadmin', password: 'admin123', role: 'product_admin', name: 'Product Admin' }
    }

    const user = mockUsers[formData.role]
    
    if (user && user.username === formData.username && user.password === formData.password) {
      onLogin(user)
    } else {
      alert('Invalid credentials!')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        
        <div className="form-group">
          <label htmlFor="role">Admin Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-control"
          >
            <option value="super_admin">Super Admin</option>
            <option value="farmer_admin">Farmer Admin</option>
            <option value="product_admin">Product Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
          <p><strong>Demo Credentials:</strong></p>
          <p>Username: superadmin/farmeradmin/productadmin</p>
          <p>Password: admin123</p>
        </div>
      </form>
    </div>
  )
}

export default Login