import React, { useState } from 'react'

const SuperAdmin = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalData, setModalData] = useState({})

  // Mock data
  const [admins] = useState([
    { id: 1, name: 'Super Admin', role: 'super_admin', email: 'super@admin.com', status: 'active' },
    { id: 2, name: 'Farmer Admin', role: 'farmer_admin', email: 'farmer@admin.com', status: 'active' },
    { id: 3, name: 'Product Admin', role: 'product_admin', email: 'product@admin.com', status: 'active' }
  ])

  const [products] = useState([
    { id: 1, name: 'Wheat', category: 'Grains', stock: 1000, price: 25, status: 'active' },
    { id: 2, name: 'Rice', category: 'Grains', stock: 800, price: 30, status: 'active' },
    { id: 3, name: 'Corn', category: 'Grains', stock: 600, price: 20, status: 'active' }
  ])

  const [transactions] = useState([
    { id: 1, farmer: 'John Doe', merchant: 'ABC Corp', product: 'Wheat', amount: 2500, date: '2024-01-15', status: 'completed' },
    { id: 2, farmer: 'Jane Smith', merchant: 'XYZ Ltd', product: 'Rice', amount: 1800, date: '2024-01-14', status: 'pending' },
    { id: 3, farmer: 'Bob Johnson', merchant: 'DEF Inc', product: 'Corn', amount: 1200, date: '2024-01-13', status: 'completed' }
  ])

  const [orders] = useState([
    { id: 1, farmer: 'John Doe', product: 'Wheat', quantity: 100, total: 2500, status: 'confirmed', date: '2024-01-15' },
    { id: 2, farmer: 'Jane Smith', product: 'Rice', quantity: 60, total: 1800, status: 'pending', date: '2024-01-14' },
    { id: 3, farmer: 'Bob Johnson', product: 'Corn', quantity: 60, total: 1200, status: 'shipped', date: '2024-01-13' }
  ])

  const [merchants] = useState([
    { id: 1, name: 'ABC Corporation', email: 'abc@corp.com', phone: '+1234567890', status: 'active', products: 15 },
    { id: 2, name: 'XYZ Limited', email: 'xyz@ltd.com', phone: '+1234567891', status: 'active', products: 12 },
    { id: 3, name: 'DEF Industries', email: 'def@ind.com', phone: '+1234567892', status: 'inactive', products: 8 }
  ])

  const [farmers] = useState([
    { id: 1, name: 'John Doe', email: 'john@farmer.com', phone: '+1234567893', location: 'Farm A', status: 'active', products: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@farmer.com', phone: '+1234567894', location: 'Farm B', status: 'active', products: 3 },
    { id: 3, name: 'Bob Johnson', email: 'bob@farmer.com', phone: '+1234567895', location: 'Farm C', status: 'pending', products: 2 }
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

  const renderDashboard = () => (
    <div>
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{admins.length}</div>
          <div className="stat-label">Total Admins</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{products.length}</div>
          <div className="stat-label">Total Products</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{transactions.length}</div>
          <div className="stat-label">Total Transactions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{orders.length}</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{merchants.length}</div>
          <div className="stat-label">Total Merchants</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{farmers.length}</div>
          <div className="stat-label">Total Farmers</div>
        </div>
      </div>
    </div>
  )

  const renderAdmins = () => (
    <div>
      <h2>Admin Management</h2>
      <button className="btn btn-primary" onClick={() => openModal('add_admin')}>
        Add New Admin
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.role.replace('_', ' ').toUpperCase()}</td>
              <td>{admin.email}</td>
              <td>{admin.status}</td>
              <td>
                <button className="btn btn-primary" onClick={() => openModal('edit_admin', admin)}>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>${product.price}</td>
              <td>{product.status}</td>
              <td>
                <button className="btn btn-primary" onClick={() => openModal('edit_product', product)}>
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
              <td>{transaction.status}</td>
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
              <td>{order.status}</td>
              <td>{order.date}</td>
              <td>
                <button className="btn btn-success">Update Status</button>
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
              <td>{merchant.status}</td>
              <td>{merchant.products}</td>
              <td>
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

  const renderFarmers = () => (
    <div>
      <h2>Farmer Management</h2>
      <button className="btn btn-primary" onClick={() => openModal('add_farmer')}>
        Add New Farmer
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Status</th>
            <th>Products</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(farmer => (
            <tr key={farmer.id}>
              <td>{farmer.id}</td>
              <td>{farmer.name}</td>
              <td>{farmer.email}</td>
              <td>{farmer.phone}</td>
              <td>{farmer.location}</td>
              <td>{farmer.status}</td>
              <td>{farmer.products}</td>
              <td>
                <button className="btn btn-primary" onClick={() => openModal('edit_farmer', farmer)}>
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

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'admins':
        return renderAdmins()
      case 'products':
        return renderProducts()
      case 'transactions':
        return renderTransactions()
      case 'orders':
        return renderOrders()
      case 'merchants':
        return renderMerchants()
      case 'farmers':
        return renderFarmers()
      default:
        return renderDashboard()
    }
  }

  return (
    <div>
      <div className="sidebar">
        <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #34495e' }}>
          <h3>Super Admin</h3>
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
        <div className="nav-item" onClick={() => setActiveTab('admins')}>
          Admin Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('products')}>
          Product Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('transactions')}>
          Transactions
        </div>
        <div className="nav-item" onClick={() => setActiveTab('orders')}>
          Orders
        </div>
        <div className="nav-item" onClick={() => setActiveTab('merchants')}>
          Merchant Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('farmers')}>
          Farmer Management
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Super Admin Dashboard</h1>
          <p>Manage all aspects of the system</p>
        </div>
        
        {renderContent()}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add/Edit {modalType.replace('_', ' ').toUpperCase()}</h3>
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <div>
              <p>Modal for {modalType} - Implementation details would go here</p>
              <button className="btn btn-primary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuperAdmin