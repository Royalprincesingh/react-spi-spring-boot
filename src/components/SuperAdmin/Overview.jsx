import React from 'react'
import { Users, Wheat, Package, Store, ShoppingCart, BarChart3, TrendingUp, AlertTriangle } from 'lucide-react'

const Overview = () => {
  // Demo data - in real app, this would come from API
  const stats = [
    {
      title: 'Total Admins',
      value: '12',
      change: '+2',
      changeType: 'increase',
      icon: Users,
      color: '#3b82f6'
    },
    {
      title: 'Active Farmers',
      value: '1,248',
      change: '+24',
      changeType: 'increase',
      icon: Wheat,
      color: '#10b981'
    },
    {
      title: 'Total Products',
      value: '3,456',
      change: '+156',
      changeType: 'increase',
      icon: Package,
      color: '#f59e0b'
    },
    {
      title: 'Active Merchants',
      value: '892',
      change: '+18',
      changeType: 'increase',
      icon: Store,
      color: '#8b5cf6'
    },
    {
      title: 'Total Orders',
      value: '15,678',
      change: '+1,234',
      changeType: 'increase',
      icon: ShoppingCart,
      color: '#ef4444'
    },
    {
      title: 'Revenue',
      value: '₹2,45,67,890',
      change: '+12.5%',
      changeType: 'increase',
      icon: BarChart3,
      color: '#06b6d4'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      action: 'New farmer registration',
      user: 'Rajesh Kumar',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      action: 'Product added',
      user: 'Product Admin',
      time: '3 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      action: 'Large order placed',
      user: 'Fresh Mart Store',
      time: '4 hours ago',
      status: 'processing'
    },
    {
      id: 4,
      action: 'New merchant approved',
      user: 'Green Valley Foods',
      time: '6 hours ago',
      status: 'approved'
    },
    {
      id: 5,
      action: 'Payment received',
      user: 'Order #12345',
      time: '8 hours ago',
      status: 'completed'
    }
  ]

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: '15 farmer registrations pending approval',
      time: '1 hour ago'
    },
    {
      id: 2,
      type: 'error',
      message: 'Low stock alert for 23 products',
      time: '2 hours ago'
    },
    {
      id: 3,
      type: 'info',
      message: 'Monthly report is ready for download',
      time: '4 hours ago'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#f59e0b'
      case 'completed':
        return '#10b981'
      case 'processing':
        return '#3b82f6'
      case 'approved':
        return '#10b981'
      default:
        return '#6b7280'
    }
  }

  const getAlertColor = (type) => {
    switch (type) {
      case 'warning':
        return '#f59e0b'
      case 'error':
        return '#ef4444'
      case 'info':
        return '#3b82f6'
      default:
        return '#6b7280'
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: `${stat.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <IconComponent size={30} color={stat.color} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6b7280',
                  marginBottom: '4px'
                }}>
                  {stat.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#111827'
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: stat.changeType === 'increase' ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    <TrendingUp size={14} />
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }}>
        {/* Recent Activities */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '20px'
          }}>
            Recent Activities
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    marginBottom: '2px'
                  }}>
                    {activity.action}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    by {activity.user} • {activity.time}
                  </div>
                </div>
                <span
                  style={{
                    background: getStatusColor(activity.status),
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}
                >
                  {activity.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '20px'
          }}>
            System Alerts
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {alerts.map((alert) => (
              <div
                key={alert.id}
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '12px',
                  background: `${getAlertColor(alert.type)}10`,
                  borderRadius: '8px',
                  border: `1px solid ${getAlertColor(alert.type)}30`
                }}
              >
                <AlertTriangle
                  size={16}
                  color={getAlertColor(alert.type)}
                  style={{ marginTop: '2px', flexShrink: 0 }}
                />
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    marginBottom: '2px'
                  }}>
                    {alert.message}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    {alert.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '20px'
        }}>
          Quick Actions
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {[
            { title: 'Add New Admin', color: '#3b82f6' },
            { title: 'View Pending Approvals', color: '#f59e0b' },
            { title: 'Generate Report', color: '#10b981' },
            { title: 'System Settings', color: '#8b5cf6' }
          ].map((action, index) => (
            <button
              key={index}
              style={{
                background: action.color,
                color: 'white',
                border: 'none',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {action.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Overview