import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import SuperAdminDashboard from './components/SuperAdmin/SuperAdminDashboard'
import FarmerAdminDashboard from './components/FarmerAdmin/FarmerAdminDashboard'
import ProductAdminDashboard from './components/ProductAdmin/ProductAdminDashboard'
import { AuthProvider, useAuth } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/super-admin/*" element={
                <ProtectedRoute allowedRoles={['super_admin']}>
                  <SuperAdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/farmer-admin/*" element={
                <ProtectedRoute allowedRoles={['farmer_admin']}>
                  <FarmerAdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/product-admin/*" element={
                <ProtectedRoute allowedRoles={['product_admin']}>
                  <ProductAdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  )
}

// Protected Route Component
function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    )
  }
  
  if (!user) {
    return <Navigate to="/login" replace />
  }
  
  if (!allowedRoles.includes(user.role)) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: 'red'
      }}>
        Access Denied: You don't have permission to access this page
      </div>
    )
  }
  
  return children
}

export default App