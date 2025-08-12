import React, { createContext, useContext, useState, useEffect } from 'react'

const NotificationContext = createContext()

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  // Demo notifications
  useEffect(() => {
    const demoNotifications = [
      {
        id: 1,
        type: 'farmer_registration',
        title: 'New Farmer Registration',
        message: 'Rajesh Kumar has requested to register as a farmer',
        data: {
          farmerId: 'F001',
          farmerName: 'Rajesh Kumar',
          location: 'Punjab',
          phone: '+91 9876543210'
        },
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        read: false
      },
      {
        id: 2,
        type: 'farmer_registration',
        title: 'New Farmer Registration',
        message: 'Priya Sharma has requested to register as a farmer',
        data: {
          farmerId: 'F002',
          farmerName: 'Priya Sharma',
          location: 'Haryana',
          phone: '+91 9876543211'
        },
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
        read: false
      }
    ]
    setNotifications(demoNotifications)
  }, [])

  const addNotification = (notification) => {
    const newNotification = {
      ...notification,
      id: Date.now(),
      timestamp: new Date(),
      read: false
    }
    setNotifications(prev => [newNotification, ...prev])
  }

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    )
  }

  const removeNotification = (notificationId) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== notificationId)
    )
  }

  const getUnreadCount = () => {
    return notifications.filter(notification => !notification.read).length
  }

  const getFarmerRegistrationNotifications = () => {
    return notifications.filter(notification => notification.type === 'farmer_registration')
  }

  const value = {
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    getUnreadCount,
    getFarmerRegistrationNotifications
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}