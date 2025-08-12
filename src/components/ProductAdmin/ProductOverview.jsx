import React from 'react'
import { Package, Store, ShoppingCart, TrendingUp, AlertTriangle, Truck } from 'lucide-react'

const ProductOverview = () => {
  const stats = [
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
      title: 'Low Stock Items',
      value: '23',
      change: '+5',
      changeType: 'increase',
      icon: AlertTriangle,
      color: '#f59e0b'
    }
  ]

  const lowStockProducts = [
    { name: 'Fresh Tomatoes', currentStock: 5, minStock: 20, farmer: 'Priya Sharma' },
    { name: 'Organic Carrots', currentStock: 8, minStock: 25, farmer: 'Rajesh Kumar' },
    { name: 'Green Peas', currentStock: 12, minStock: 30, farmer: 'Amit Singh' },
    { name: 'Onions', currentStock: 15, minStock: 50, farmer: 'Sunita Devi' }
  ]

  const recentOrders = [
    { id: 'ORD-001', merchant: 'Fresh Mart Store', items: 5, amount: 25000, status: 'processing' },
    { id: 'ORD-002', merchant: 'Green Valley Foods', items: 3, amount: 15000, status: 'shipped' },
    { id: 'ORD-003', merchant: 'Organic Hub', items: 8, amount: 32000, status: 'pending' },
    { id: 'ORD-004', merchant: 'Farm Fresh Store', items: 2, amount: 8000, status: 'delivered' }
  ]

  const topCategories = [
    { category: 'Vegetables', products: 1245, revenue: '₹18,45,000' },
    { category: 'Grains', products: 867, revenue: '₹15,67,000' },
    { category: 'Fruits', products: 623, revenue: '₹12,34,000' },
    { category: 'Dairy', products: 456, revenue: '₹9,87,000' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#f59e0b'
      case 'processing':
        return '#3b82f6'
      case 'shipped':
        return '#8b5cf6'
      case 'delivered':
        return '#10b981'
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
        {/* Low Stock Alert */}
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
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertTriangle size={20} color="#f59e0b" />
            Low Stock Alert
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {lowStockProducts.map((product, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  background: '#fef3cd',
                  border: '1px solid #fbbf24',
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
                    {product.name}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    by {product.farmer}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#f59e0b'
                  }}>
                    {product.currentStock} / {product.minStock}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    units
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
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
            Recent Orders
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentOrders.map((order, index) => (
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
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827',
                    marginBottom: '2px'
                  }}>
                    {order.id}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    {order.merchant} • {order.items} items
                  </div>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#111827'
                  }}>
                    ₹{order.amount.toLocaleString()}
                  </div>
                  <span
                    style={{
                      background: getStatusColor(order.status),
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      fontSize: '10px',
                      fontWeight: '500'
                    }}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Categories */}
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
          Top Categories
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {topCategories.map((category, index) => (
            <div
              key={index}
              style={{
                padding: '16px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '8px'
              }}>
                {category.category}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '4px'
              }}>
                {category.products} products
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#10b981'
              }}>
                {category.revenue}
              </div>
            </div>
          ))}
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
            { title: 'Add New Product', color: '#f59e0b' },
            { title: 'Manage Stock Levels', color: '#ef4444' },
            { title: 'Process Orders', color: '#3b82f6' },
            { title: 'Merchant Approvals', color: '#8b5cf6' }
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

export default ProductOverview