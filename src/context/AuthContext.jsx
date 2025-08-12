import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Demo admin users - In real app, this would come from API
  const demoUsers = {
    'superadmin@admin.com': {
      id: 1,
      email: 'superadmin@admin.com',
      name: 'Super Admin',
      role: 'super_admin',
      password: 'admin123'
    },
    'farmeradmin@admin.com': {
      id: 2,
      email: 'farmeradmin@admin.com',
      name: 'Farmer Admin',
      role: 'farmer_admin',
      password: 'admin123'
    },
    'productadmin@admin.com': {
      id: 3,
      email: 'productadmin@admin.com',
      name: 'Product Admin',
      role: 'product_admin',
      password: 'admin123'
    }
  }

  useEffect(() => {
    // Check if user is logged in (localStorage check)
    const savedUser = localStorage.getItem('adminUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const foundUser = demoUsers[email]
      if (foundUser && foundUser.password === password) {
        const { password: _, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
        localStorage.setItem('adminUser', JSON.stringify(userWithoutPassword))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('adminUser')
  }

  const getDashboardRoute = (role) => {
    switch (role) {
      case 'super_admin':
        return '/super-admin'
      case 'farmer_admin':
        return '/farmer-admin'
      case 'product_admin':
        return '/product-admin'
      default:
        return '/login'
    }
  }

  const value = {
    user,
    loading,
    login,
    logout,
    getDashboardRoute
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}