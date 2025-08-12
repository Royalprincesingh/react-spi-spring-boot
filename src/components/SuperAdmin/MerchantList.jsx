import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const MerchantList = () => {
  const [merchants] = useState([
    { id: 1, name: 'Fresh Mart Store', email: 'contact@freshmart.com', location: 'Delhi', status: 'active', totalOrders: 156 },
    { id: 2, name: 'Green Valley Foods', email: 'info@greenvalley.com', location: 'Mumbai', status: 'active', totalOrders: 89 },
    { id: 3, name: 'Organic Hub', email: 'hello@organichub.com', location: 'Bangalore', status: 'pending', totalOrders: 0 }
  ])

  const columns = [
    { key: 'name', label: 'Merchant Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'location', label: 'Location', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'totalOrders', label: 'Total Orders', sortable: true }
  ]

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Merchant Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          View and manage all merchants
        </p>
      </div>
      <DataTable data={merchants} columns={columns} title="All Merchants" />
    </div>
  )
}

export default MerchantList