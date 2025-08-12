import React from 'react'
import { useNotifications } from '../../context/NotificationContext'
import { Bell, Check, X, Clock, User, Phone, MapPin } from 'lucide-react'

const NotificationCenter = () => {
  const { 
    notifications, 
    markAsRead, 
    markAllAsRead, 
    removeNotification,
    getUnreadCount 
  } = useNotifications()

  const handleApprove = (notification) => {
    // In real app, this would make API call
    console.log('Approving farmer:', notification.data.farmerName)
    removeNotification(notification.id)
    // Add success notification
    alert(`Farmer ${notification.data.farmerName} has been approved!`)
  }

  const handleReject = (notification) => {
    // In real app, this would make API call
    console.log('Rejecting farmer:', notification.data.farmerName)
    removeNotification(notification.id)
    // Add rejection notification
    alert(`Farmer ${notification.data.farmerName} has been rejected.`)
  }

  const formatTime = (timestamp) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diffInMinutes = Math.floor((now - time) / (1000 * 60))
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`
    } else {
      return `${Math.floor(diffInMinutes / 1440)} days ago`
    }
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'farmer_registration':
        return <User size={20} color="#f59e0b" />
      default:
        return <Bell size={20} color="#6b7280" />
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
            Notifications
          </h2>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            {getUnreadCount()} unread notifications
          </p>
        </div>
        {notifications.length > 0 && (
          <button
            onClick={markAllAsRead}
            style={{
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Mark All as Read
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {notifications.length === 0 ? (
          <div style={{
            padding: '60px 20px',
            textAlign: 'center',
            color: '#6b7280'
          }}>
            <Bell size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>No notifications</h3>
            <p>You're all caught up! No new notifications at this time.</p>
          </div>
        ) : (
          notifications.map((notification, index) => (
            <div
              key={notification.id}
              style={{
                padding: '20px',
                borderBottom: index < notifications.length - 1 ? '1px solid #f3f4f6' : 'none',
                background: notification.read ? 'white' : '#f0f4ff',
                position: 'relative'
              }}
            >
              {/* Unread indicator */}
              {!notification.read && (
                <div style={{
                  position: 'absolute',
                  left: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '4px',
                  height: '40px',
                  background: '#4f46e5',
                  borderRadius: '2px'
                }} />
              )}

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                {/* Icon */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#f59e0b20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {getNotificationIcon(notification.type)}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                      {notification.title}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '12px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        {formatTime(notification.timestamp)}
                      </span>
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#4f46e5',
                            cursor: 'pointer',
                            fontSize: '12px',
                            textDecoration: 'underline'
                          }}
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
                    {notification.message}
                  </p>

                  {/* Farmer Registration Details */}
                  {notification.type === 'farmer_registration' && notification.data && (
                    <div style={{
                      background: '#f9fafb',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '16px',
                      marginBottom: '16px'
                    }}>
                      <h5 style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                        Farmer Details
                      </h5>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <User size={16} color="#6b7280" />
                          <div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>Name</div>
                            <div style={{ fontSize: '14px', fontWeight: '500' }}>{notification.data.farmerName}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <MapPin size={16} color="#6b7280" />
                          <div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>Location</div>
                            <div style={{ fontSize: '14px', fontWeight: '500' }}>{notification.data.location}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Phone size={16} color="#6b7280" />
                          <div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>Phone</div>
                            <div style={{ fontSize: '14px', fontWeight: '500' }}>{notification.data.phone}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Bell size={16} color="#6b7280" />
                          <div>
                            <div style={{ fontSize: '12px', color: '#6b7280' }}>Farmer ID</div>
                            <div style={{ fontSize: '14px', fontWeight: '500' }}>{notification.data.farmerId}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {notification.type === 'farmer_registration' && (
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        onClick={() => handleApprove(notification)}
                        style={{
                          background: '#10b981',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#059669'}
                        onMouseLeave={(e) => e.target.style.background = '#10b981'}
                      >
                        <Check size={14} />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(notification)}
                        style={{
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#dc2626'}
                        onMouseLeave={(e) => e.target.style.background = '#ef4444'}
                      >
                        <X size={14} />
                        Reject
                      </button>
                      <button
                        onClick={() => removeNotification(notification.id)}
                        style={{
                          background: '#6b7280',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#4b5563'}
                        onMouseLeave={(e) => e.target.style.background = '#6b7280'}
                      >
                        Dismiss
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default NotificationCenter