import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNotifications } from '../../context/NotificationContext'
import { 
  LogOut, 
  Bell, 
  Menu, 
  X,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Store,
  Wheat,
  Settings,
  Home
} from 'lucide-react'

const Layout = ({ children, activeTab, onTabChange, tabs, title }) => {
  const { user, logout } = useAuth()
  const { getUnreadCount } = useNotifications()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const unreadCount = getUnreadCount()

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  const getIcon = (tabKey) => {
    const iconMap = {
      overview: Home,
      admins: Users,
      farmers: Wheat,
      products: Package,
      merchants: Store,
      orders: ShoppingCart,
      transactions: BarChart3,
      notifications: Bell,
      stock: Package,
      settings: Settings
    }
    const IconComponent = iconMap[tabKey] || Home
    return <IconComponent size={20} />
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f5' }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? '260px' : '80px',
        background: 'white',
        borderRight: '1px solid #e1e5e9',
        transition: 'width 0.3s ease',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Sidebar Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e1e5e9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center'
        }}>
          {sidebarOpen && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                Admin Panel
              </h2>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                {user?.name}
              </p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '20px 0' }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              style={{
                width: '100%',
                padding: sidebarOpen ? '12px 20px' : '12px',
                border: 'none',
                background: activeTab === tab.key ? '#f0f4ff' : 'transparent',
                color: activeTab === tab.key ? '#4f46e5' : '#666',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: sidebarOpen ? '12px' : '0',
                justifyContent: sidebarOpen ? 'flex-start' : 'center',
                fontSize: '14px',
                fontWeight: activeTab === tab.key ? '600' : '400',
                borderLeft: activeTab === tab.key ? '3px solid #4f46e5' : '3px solid transparent',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.background = '#f8f9fa'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.target.style.background = 'transparent'
                }
              }}
            >
              {getIcon(tab.key)}
              {sidebarOpen && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {tab.label}
                  {tab.key === 'notifications' && unreadCount > 0 && (
                    <span style={{
                      background: '#ef4444',
                      color: 'white',
                      borderRadius: '10px',
                      padding: '2px 6px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      minWidth: '18px',
                      textAlign: 'center'
                    }}>
                      {unreadCount}
                    </span>
                  )}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{
          background: 'white',
          borderBottom: '1px solid #e1e5e9',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
              {title}
            </h1>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '2px' }}>
              Welcome back, {user?.name}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Notifications Bell */}
            <button
              onClick={() => onTabChange('notifications')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Bell size={20} color="#666" />
              {unreadCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  background: '#ef4444',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '2px 6px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  minWidth: '16px',
                  textAlign: 'center'
                }}>
                  {unreadCount}
                </span>
              )}
            </button>

            {/* User Info */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '8px 16px',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                {user?.name?.charAt(0) || 'A'}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                  {user?.name}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {user?.role?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              style={{
                background: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#dc2626'}
              onMouseLeave={(e) => e.target.style.background = '#ef4444'}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main style={{
          flex: 1,
          padding: '24px',
          overflow: 'auto',
          background: '#f5f5f5'
        }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout