import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const OrderManagement = () => {
  const [orders] = useState([
    { id: 1, orderId: 'ORD-001', merchant: 'Fresh Mart Store', farmer: 'Rajesh Kumar', amount: 25000, items: 5, status: 'completed', date: '2024-01-15T00:00:00Z' },
    { id: 2, orderId: 'ORD-002', merchant: 'Green Valley Foods', farmer: 'Amit Singh', amount: 15000, items: 3, status: 'processing', date: '2024-01-14T00:00:00Z' },
    { id: 3, orderId: 'ORD-003', merchant: 'Organic Hub', farmer: 'Priya Sharma', amount: 8000, items: 8, status: 'pending', date: '2024-01-13T00:00:00Z' },
    { id: 4, orderId: 'ORD-004', merchant: 'Farm Fresh Store', farmer: 'Sunita Devi', amount: 12000, items: 6, status: 'shipped', date: '2024-01-12T00:00:00Z' }
  ])

  const columns = [
    { key: 'orderId', label: 'Order ID', sortable: true },
    { key: 'merchant', label: 'Merchant', sortable: true },
    { key: 'farmer', label: 'Farmer', sortable: true },
    { key: 'items', label: 'Items', sortable: true },
    { key: 'amount', label: 'Amount', type: 'currency', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'date', label: 'Date', type: 'date', sortable: true }
  ]

  const handleView = (order) => {
    alert(`Viewing order: ${order.orderId}`)
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Order Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          Manage and track all orders between farmers and merchants
        </p>
      </div>
      <DataTable data={orders} columns={columns} onView={handleView} title="All Orders" />
    </div>
  )
}

export default OrderManagement