import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import SuperAdmin from './components/SuperAdmin'
import FarmerAdmin from './components/FarmerAdmin'
import ProductAdmin from './components/ProductAdmin'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = (userData) => {
    setCurrentUser(userData)
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  const renderAdminComponent = () => {
    if (!currentUser) return <Navigate to="/login" />
    
    switch (currentUser.role) {
      case 'super_admin':
        return <SuperAdmin user={currentUser} onLogout={handleLogout} />
      case 'farmer_admin':
        return <FarmerAdmin user={currentUser} onLogout={handleLogout} />
      case 'product_admin':
        return <ProductAdmin user={currentUser} onLogout={handleLogout} />
      default:
        return <Navigate to="/login" />
    }
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              currentUser ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={renderAdminComponent()} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App