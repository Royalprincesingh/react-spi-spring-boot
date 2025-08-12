import React from 'react'
import { Wheat, Users, TrendingUp, AlertTriangle, Clock, CheckCircle } from 'lucide-react'

const FarmerOverview = () => {
  const stats = [
    {
      title: 'Total Farmers',
      value: '1,248',
      change: '+24',
      changeType: 'increase',
      icon: Users,
      color: '#10b981'
    },
    {
      title: 'Pending Approvals',
      value: '15',
      change: '+3',
      changeType: 'increase',
      icon: Clock,
      color: '#f59e0b'
    },
    {
      title: 'Active Farmers',
      value: '1,203',
      change: '+21',
      changeType: 'increase',
      icon: CheckCircle,
      color: '#10b981'
    },
    {
      title: 'Total Transactions',
      value: '5,678',
      change: '+234',
      changeType: 'increase',
      icon: TrendingUp,
      color: '#3b82f6'
    }
  ]

  const recentFarmers = [
    { id: 1, name: 'Rajesh Kumar', location: 'Punjab', status: 'pending', time: '2 hours ago' },
    { id: 2, name: 'Priya Sharma', location: 'Haryana', status: 'approved', time: '4 hours ago' },
    { id: 3, name: 'Amit Singh', location: 'UP', status: 'pending', time: '6 hours ago' },
    { id: 4, name: 'Sunita Devi', location: 'Bihar', status: 'approved', time: '8 hours ago' }
  ]

  const topFarmers = [
    { name: 'Rajesh Kumar', earnings: '₹1,25,000', transactions: 45 },
    { name: 'Amit Singh', earnings: '₹98,500', transactions: 38 },
    { name: 'Priya Sharma', earnings: '₹87,200', transactions: 32 },
    { name: 'Sunita Devi', earnings: '₹76,800', transactions: 29 }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#f59e0b'
      case 'approved':
        return '#10b981'
      case 'rejected':
        return '#ef4444'
      default:
        return '#6b7280'
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
        gridTemplateColumns: '1fr 1fr',
        gap: '24px'
      }}>
        {/* Recent Farmer Applications */}
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
            Recent Farmer Applications
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentFarmers.map((farmer) => (
              <div
                key={farmer.id}
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
                    {farmer.name}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    {farmer.location} • {farmer.time}
                  </div>
                </div>
                <span
                  style={{
                    background: getStatusColor(farmer.status),
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}
                >
                  {farmer.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Farmers */}
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
            Top Performing Farmers
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {topFarmers.map((farmer, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#111827',
                      marginBottom: '2px'
                    }}>
                      {farmer.name}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      {farmer.transactions} transactions
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#10b981'
                }}>
                  {farmer.earnings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Farmer Management Actions */}
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
            { title: 'Review Pending Applications', color: '#f59e0b', count: '15' },
            { title: 'View All Farmers', color: '#10b981', count: '1,248' },
            { title: 'Generate Report', color: '#3b82f6', count: null },
            { title: 'Farmer Transactions', color: '#8b5cf6', count: '5,678' }
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
                transition: 'transform 0.2s',
                textAlign: 'left',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div>{action.title}</div>
              {action.count && (
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {action.count}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FarmerOverview