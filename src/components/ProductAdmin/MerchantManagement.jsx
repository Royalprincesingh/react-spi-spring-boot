import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const MerchantManagement = () => {
  const [merchants] = useState([
    { id: 1, name: 'Fresh Mart Store', email: 'contact@freshmart.com', location: 'Delhi', status: 'active', totalOrders: 156, totalSpent: 2500000 },
    { id: 2, name: 'Green Valley Foods', email: 'info@greenvalley.com', location: 'Mumbai', status: 'active', totalOrders: 89, totalSpent: 1800000 },
    { id: 3, name: 'Organic Hub', email: 'hello@organichub.com', location: 'Bangalore', status: 'pending', totalOrders: 0, totalSpent: 0 },
    { id: 4, name: 'Farm Fresh Store', email: 'orders@farmfresh.com', location: 'Chennai', status: 'active', totalOrders: 67, totalSpent: 1200000 }
  ])

  const columns = [
    { key: 'name', label: 'Merchant Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'location', label: 'Location', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'totalOrders', label: 'Total Orders', sortable: true },
    { key: 'totalSpent', label: 'Total Spent', type: 'currency', sortable: true }
  ]

  const handleView = (merchant) => {
    alert(`Viewing merchant: ${merchant.name}`)
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Merchant Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          Manage merchant accounts, approvals, and performance
        </p>
      </div>
      <DataTable data={merchants} columns={columns} onView={handleView} title="All Merchants" />
    </div>
  )
}

export default MerchantManagement