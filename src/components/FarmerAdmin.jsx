import React, { useState } from 'react'

const FarmerAdmin = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalData, setModalData] = useState({})

  // Mock data
  const [farmers, setFarmers] = useState([
    { id: 1, name: 'John Doe', email: 'john@farmer.com', phone: '+1234567893', location: 'Farm A', status: 'active', products: 5, registrationDate: '2024-01-10' },
    { id: 2, name: 'Jane Smith', email: 'jane@farmer.com', phone: '+1234567894', location: 'Farm B', status: 'active', products: 3, registrationDate: '2024-01-12' },
    { id: 3, name: 'Bob Johnson', email: 'bob@farmer.com', phone: '+1234567895', location: 'Farm C', status: 'pending', products: 2, registrationDate: '2024-01-15' },
    { id: 4, name: 'Alice Brown', email: 'alice@farmer.com', phone: '+1234567896', location: 'Farm D', status: 'pending', products: 0, registrationDate: '2024-01-16' }
  ])

  const [farmerTransactions] = useState([
    { id: 1, farmer: 'John Doe', product: 'Wheat', amount: 2500, date: '2024-01-15', status: 'completed' },
    { id: 2, farmer: 'Jane Smith', product: 'Rice', amount: 1800, date: '2024-01-14', status: 'pending' },
    { id: 3, farmer: 'Bob Johnson', product: 'Corn', amount: 1200, date: '2024-01-13', status: 'completed' }
  ])

  const [notifications] = useState([
    { id: 1, farmer: 'Alice Brown', message: 'New farmer registration pending approval', date: '2024-01-16', status: 'unread' },
    { id: 2, farmer: 'Bob Johnson', message: 'Farmer registration approved', date: '2024-01-15', status: 'read' }
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

  const approveFarmer = (farmerId) => {
    setFarmers(prevFarmers => 
      prevFarmers.map(farmer => 
        farmer.id === farmerId 
          ? { ...farmer, status: 'active' }
          : farmer
      )
    )
  }

  const rejectFarmer = (farmerId) => {
    setFarmers(prevFarmers => 
      prevFarmers.map(farmer => 
        farmer.id === farmerId 
          ? { ...farmer, status: 'rejected' }
          : farmer
      )
    )
  }

  const renderDashboard = () => (
    <div>
      <h2>Farmer Admin Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{farmers.filter(f => f.status === 'active').length}</div>
          <div className="stat-label">Active Farmers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{farmers.filter(f => f.status === 'pending').length}</div>
          <div className="stat-label">Pending Approvals</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{farmerTransactions.length}</div>
          <div className="stat-label">Total Transactions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{notifications.filter(n => n.status === 'unread').length}</div>
          <div className="stat-label">Unread Notifications</div>
        </div>
      </div>
    </div>
  )

  const renderFarmerList = () => (
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
            <th>Registration Date</th>
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
              <td>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: farmer.status === 'active' ? '#d4edda' : 
                                farmer.status === 'pending' ? '#fff3cd' : '#f8d7da',
                  color: farmer.status === 'active' ? '#155724' : 
                         farmer.status === 'pending' ? '#856404' : '#721c24'
                }}>
                  {farmer.status}
                </span>
              </td>
              <td>{farmer.products}</td>
              <td>{farmer.registrationDate}</td>
              <td>
                {farmer.status === 'pending' && (
                  <>
                    <button className="btn btn-success" onClick={() => approveFarmer(farmer.id)}>
                      Approve
                    </button>
                    <button className="btn btn-danger" onClick={() => rejectFarmer(farmer.id)}>
                      Reject
                    </button>
                  </>
                )}
                <button className="btn btn-primary" onClick={() => openModal('view_farmer', farmer)}>
                  View Details
                </button>
                <button className="btn btn-primary" onClick={() => openModal('edit_farmer', farmer)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderNotifications = () => (
    <div>
      <h2>Notifications</h2>
      <div className="card">
        {notifications.map(notification => (
          <div key={notification.id} style={{ 
            padding: '15px', 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            marginBottom: '10px',
            backgroundColor: notification.status === 'unread' ? '#f8f9fa' : 'white'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{notification.farmer}</strong>
                <p style={{ margin: '5px 0', color: '#666' }}>{notification.message}</p>
                <small style={{ color: '#999' }}>{notification.date}</small>
              </div>
              <span style={{ 
                padding: '2px 8px', 
                borderRadius: '12px', 
                fontSize: '12px',
                backgroundColor: notification.status === 'unread' ? '#007bff' : '#6c757d',
                color: 'white'
              }}>
                {notification.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderTransactions = () => (
    <div>
      <h2>Farmer Transactions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {farmerTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.farmer}</td>
              <td>{transaction.product}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: transaction.status === 'completed' ? '#d4edda' : '#fff3cd',
                  color: transaction.status === 'completed' ? '#155724' : '#856404'
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
      case 'farmers':
        return renderFarmerList()
      case 'notifications':
        return renderNotifications()
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
          <h3>Farmer Admin</h3>
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
        <div className="nav-item" onClick={() => setActiveTab('farmers')}>
          Farmer Management
        </div>
        <div className="nav-item" onClick={() => setActiveTab('notifications')}>
          Notifications
          {notifications.filter(n => n.status === 'unread').length > 0 && (
            <span className="notification-badge">
              {notifications.filter(n => n.status === 'unread').length}
            </span>
          )}
        </div>
        <div className="nav-item" onClick={() => setActiveTab('transactions')}>
          Transactions
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Farmer Admin Dashboard</h1>
          <p>Manage farmers and their registrations</p>
        </div>
        
        {renderContent()}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Farmer Details</h3>
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <div>
              {modalType === 'view_farmer' && (
                <div>
                  <h4>{modalData.name}</h4>
                  <p><strong>Email:</strong> {modalData.email}</p>
                  <p><strong>Phone:</strong> {modalData.phone}</p>
                  <p><strong>Location:</strong> {modalData.location}</p>
                  <p><strong>Status:</strong> {modalData.status}</p>
                  <p><strong>Products:</strong> {modalData.products}</p>
                  <p><strong>Registration Date:</strong> {modalData.registrationDate}</p>
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

export default FarmerAdmin