import React, { useState } from 'react'

const ProductAdmin = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalData, setModalData] = useState({})

  // Mock data
  const [products, setProducts] = useState([
    { id: 1, name: 'Wheat', category: 'Grains', stock: 1000, price: 25, status: 'active', supplier: 'ABC Corp', lastUpdated: '2024-01-15' },
    { id: 2, name: 'Rice', category: 'Grains', stock: 800, price: 30, status: 'active', supplier: 'XYZ Ltd', lastUpdated: '2024-01-14' },
    { id: 3, name: 'Corn', category: 'Grains', stock: 600, price: 20, status: 'active', supplier: 'DEF Inc', lastUpdated: '2024-01-13' },
    { id: 4, name: 'Soybeans', category: 'Legumes', stock: 400, price: 35, status: 'low_stock', supplier: 'GHI Corp', lastUpdated: '2024-01-12' }
  ])

  const [orders, setOrders] = useState([
    { id: 1, farmer: 'John Doe', product: 'Wheat', quantity: 100, total: 2500, status: 'confirmed', date: '2024-01-15', merchant: 'ABC Corp' },
    { id: 2, farmer: 'Jane Smith', product: 'Rice', quantity: 60, total: 1800, status: 'pending', date: '2024-01-14', merchant: 'XYZ Ltd' },
    { id: 3, farmer: 'Bob Johnson', product: 'Corn', quantity: 60, total: 1200, status: 'shipped', date: '2024-01-13', merchant: 'DEF Inc' },
    { id: 4, farmer: 'Alice Brown', product: 'Soybeans', quantity: 40, total: 1400, status: 'processing', date: '2024-01-16', merchant: 'GHI Corp' }
  ])

  const [merchants] = useState([
    { id: 1, name: 'ABC Corporation', email: 'abc@corp.com', phone: '+1234567890', status: 'active', products: 15, totalOrders: 45, revenue: 125000 },
    { id: 2, name: 'XYZ Limited', email: 'xyz@ltd.com', phone: '+1234567891', status: 'active', products: 12, totalOrders: 38, revenue: 98000 },
    { id: 3, name: 'DEF Industries', email: 'def@ind.com', phone: '+1234567892', status: 'inactive', products: 8, totalOrders: 22, revenue: 45000 },
    { id: 4, name: 'GHI Corporation', email: 'ghi@corp.com', phone: '+1234567893', status: 'active', products: 10, totalOrders: 31, revenue: 78000 }
  ])

  const [transactions] = useState([
    { id: 1, farmer: 'John Doe', merchant: 'ABC Corp', product: 'Wheat', amount: 2500, date: '2024-01-15', status: 'completed' },
    { id: 2, farmer: 'Jane Smith', merchant: 'XYZ Ltd', product: 'Rice', amount: 1800, date: '2024-01-14', status: 'pending' },
    { id: 3, farmer: 'Bob Johnson', merchant: 'DEF Inc', product: 'Corn', amount: 1200, date: '2024-01-13', status: 'completed' },
    { id: 4, farmer: 'Alice Brown', merchant: 'GHI Corp', product: 'Soybeans', amount: 1400, date: '2024-01-16', status: 'processing' }
  ])

  const openModal = (type, data = {}) => {
    setModalType(type)
    setModalData(data)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalType('')
    setModalData({})
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    )
  }

  const updateStock = (productId, newStock) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, stock: newStock, lastUpdated: new Date().toISOString().split('T')[0] }
          : product
      )
    )
  }

  const renderDashboard = () => (
    <div>
      <h2>Product Admin Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{products.length}</div>
          <div className="stat-label">Total Products</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{products.filter(p => p.stock < 500).length}</div>
          <div className="stat-label">Low Stock Items</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{orders.length}</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{merchants.filter(m => m.status === 'active').length}</div>
          <div className="stat-label">Active Merchants</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{orders.filter(o => o.status === 'pending').length}</div>
          <div className="stat-label">Pending Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{transactions.length}</div>
          <div className="stat-label">Total Transactions</div>
        </div>
      </div>
    </div>
  )

  const renderProducts = () => (
    <div>
      <h2>Product Management</h2>
      <button className="btn btn-primary" onClick={() => openModal('add_product')}>
        Add New Product
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Status</th>
            <th>Supplier</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                <span style={{ 
                  color: product.stock < 500 ? '#dc3545' : product.stock < 800 ? '#ffc107' : '#28a745'
                }}>
                  {product.stock}
                </span>
              </td>
              <td>${product.price}</td>
              <td>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: product.status === 'active' ? '#d4edda' : '#fff3cd',
                  color: product.status === 'active' ? '#155724' : '#856404'
                }}>
                  {product.status.replace('_', ' ')}
                </span>
              </td>
              <td>{product.supplier}</td>
              <td>{product.lastUpdated}</td>
              <td>
                <button className="btn btn-primary" onClick={() => openModal('edit_product', product)}>
                  Edit
                </button>
                <button className="btn btn-success" onClick={() => openModal('update_stock', product)}>
                  Update Stock
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderOrders = () => (
    <div>
      <h2>Order Management</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Merchant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.farmer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.total}</td>
              <td>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: order.status === 'completed' ? '#d4edda' : 
                                order.status === 'pending' ? '#fff3cd' : 
                                order.status === 'shipped' ? '#cce5ff' : '#e2e3e5',
                  color: order.status === 'completed' ? '#155724' : 
                         order.status === 'pending' ? '#856404' : 
                         order.status === 'shipped' ? '#004085' : '#383d41'
                }}>
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
              <td>{order.merchant}</td>
              <td>
                <select 
                  value={order.status} 
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  style={{ padding: '4px 8px', marginRight: '5px' }}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="completed">Completed</option>
                </select>
                <button className="btn btn-primary" onClick={() => openModal('view_order', order)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderMerchants = () => (
    <div>
      <h2>Merchant Management</h2>
      <button className="btn btn-primary" onClick={() => openModal('add_merchant')}>
        Add New Merchant
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Products</th>
            <th>Total Orders</th>
            <th>Revenue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map(merchant => (
            <tr key={merchant.id}>
              <td>{merchant.id}</td>
              <td>{merchant.name}</td>
              <td>{merchant.email}</td>
              <td>{merchant.phone}</td>
              <td>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: merchant.status === 'active' ? '#d4edda' : '#f8d7da',
                  color: merchant.status === 'active' ? '#155724' : '#721c24'
                }}>
                  {merchant.status}
                </span>
              </td>
              <td>{merchant.products}</td>
              <td>{merchant.totalOrders}</td>
              <td>${merchant.revenue.toLocaleString()}</td>
              <td>
                <button className="btn btn-primary" onClick={() => openModal('view_merchant', merchant)}>
                  View Details
                </button>
                <button className="btn btn-primary" onClick={() => openModal('edit_merchant', merchant)}>
                  Edit
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderTransactions = () => (
    <div>
      <h2>Transaction History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer</th>
            <th>Merchant</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.farmer}</td>
              <td>{transaction.merchant}</td>
              <td>{transaction.product}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: transaction.status === 'completed' ? '#d4edda' : 
                                transaction.status === 'pending' ? '#fff3cd' : '#cce5ff',
                  color: transaction.status === 'completed' ? '#155724' : 
                         transaction.status === 'pending' ? '#856404' : '#004085'
                }}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'products':
        return renderProducts()
      case 'orders':
        return renderOrders()
      case 'merchants':
        return renderMerchants()
      case 'transactions':
        return renderTransactions()
      default:
        return renderDashboard()
    }
  }

  return (
    <div>
      <div className="sidebar">
        <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #34495e' }}>
          <h3>Product Admin</h3>
          <div className="user-info">
            <div className="user-avatar">{user.name.charAt(0)}</div>
            <div>
              <div>{user.name}</div>
              <button className="logout-btn" onClick={onLogout}>Logout</button>
            </div>
          </div>
        </div>
        
        <div className="nav-item" onClick={() => setActiveTab('dashboard')}>
          Dashboard
        </div>
        <div className="nav-item" onClick={() => setActiveTab('products')}>
          Product Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('orders')}>
          Order Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('merchants')}>
          Merchant Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('transactions')}>
          Transactions
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Product Admin Dashboard</h1>
          <p>Manage products, stock, orders, and merchants</p>
        </div>
        
        {renderContent()}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{modalType.replace('_', ' ').toUpperCase()}</h3>
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <div>
              {modalType === 'view_order' && (
                <div>
                  <h4>Order #{modalData.id}</h4>
                  <p><strong>Farmer:</strong> {modalData.farmer}</p>
                  <p><strong>Product:</strong> {modalData.product}</p>
                  <p><strong>Quantity:</strong> {modalData.quantity}</p>
                  <p><strong>Total:</strong> ${modalData.total}</p>
                  <p><strong>Status:</strong> {modalData.status}</p>
                  <p><strong>Date:</strong> {modalData.date}</p>
                  <p><strong>Merchant:</strong> {modalData.merchant}</p>
                </div>
              )}
              {modalType === 'view_merchant' && (
                <div>
                  <h4>{modalData.name}</h4>
                  <p><strong>Email:</strong> {modalData.email}</p>
                  <p><strong>Phone:</strong> {modalData.phone}</p>
                  <p><strong>Status:</strong> {modalData.status}</p>
                  <p><strong>Products:</strong> {modalData.products}</p>
                  <p><strong>Total Orders:</strong> {modalData.totalOrders}</p>
                  <p><strong>Revenue:</strong> ${modalData.revenue.toLocaleString()}</p>
                </div>
              )}
              {modalType === 'update_stock' && (
                <div>
                  <h4>Update Stock - {modalData.name}</h4>
                  <div className="form-group">
                    <label>Current Stock: {modalData.stock}</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Enter new stock amount"
                      onChange={(e) => setModalData({...modalData, newStock: e.target.value})}
                    />
                  </div>
                  <button className="btn btn-success" onClick={() => {
                    if (modalData.newStock) {
                      updateStock(modalData.id, parseInt(modalData.newStock))
                      closeModal()
                    }
                  }}>
                    Update Stock
                  </button>
                </div>
              )}
              <button className="btn btn-primary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductAdmin