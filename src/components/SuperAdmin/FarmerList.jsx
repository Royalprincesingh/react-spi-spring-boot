import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const FarmerList = () => {
  // Demo farmer data
  const [farmers] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@farmer.com',
      phone: '+91 9876543210',
      location: 'Punjab',
      farmSize: '5 acres',
      crops: 'Wheat, Rice',
      status: 'active',
      joinedDate: '2023-01-15T00:00:00Z',
      totalTransactions: 45,
      totalEarnings: 125000
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@farmer.com',
      phone: '+91 9876543211',
      location: 'Haryana',
      farmSize: '3 acres',
      crops: 'Vegetables',
      status: 'pending',
      joinedDate: '2024-01-10T00:00:00Z',
      totalTransactions: 0,
      totalEarnings: 0
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit.singh@farmer.com',
      phone: '+91 9876543212',
      location: 'Uttar Pradesh',
      farmSize: '8 acres',
      crops: 'Sugarcane, Wheat',
      status: 'active',
      joinedDate: '2023-06-20T00:00:00Z',
      totalTransactions: 78,
      totalEarnings: 245000
    }
  ])

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'phone', label: 'Phone', sortable: true },
    { key: 'location', label: 'Location', sortable: true },
    { key: 'farmSize', label: 'Farm Size', sortable: true },
    { key: 'crops', label: 'Crops' },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'totalEarnings', label: 'Total Earnings', type: 'currency', sortable: true }
  ]

  const handleView = (farmer) => {
    alert(`Viewing farmer: ${farmer.name}`)
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Farmer Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          View and manage all registered farmers
        </p>
      </div>

      <DataTable
        data={farmers}
        columns={columns}
        onView={handleView}
        title="All Farmers"
        emptyMessage="No farmers found"
      />
    </div>
  )
}

export default FarmerList