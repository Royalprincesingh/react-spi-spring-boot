import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const FarmerTransactions = () => {
  const [transactions] = useState([
    {
      id: 1,
      transactionId: 'TXN-F001',
      farmerName: 'Rajesh Kumar',
      type: 'Sale',
      product: 'Organic Wheat',
      quantity: '100 kg',
      amount: 25000,
      merchant: 'Fresh Mart Store',
      status: 'completed',
      date: '2024-01-15T00:00:00Z'
    },
    {
      id: 2,
      transactionId: 'TXN-F002',
      farmerName: 'Amit Singh',
      type: 'Sale',
      product: 'Basmati Rice',
      quantity: '50 kg',
      amount: 15000,
      merchant: 'Green Valley Foods',
      status: 'processing',
      date: '2024-01-14T00:00:00Z'
    },
    {
      id: 3,
      transactionId: 'TXN-F003',
      farmerName: 'Priya Sharma',
      type: 'Sale',
      product: 'Fresh Tomatoes',
      quantity: '25 kg',
      amount: 2000,
      merchant: 'Organic Hub',
      status: 'pending',
      date: '2024-01-13T00:00:00Z'
    },
    {
      id: 4,
      transactionId: 'TXN-F004',
      farmerName: 'Sunita Devi',
      type: 'Payment',
      product: 'Rice Vegetables Mix',
      quantity: '30 kg',
      amount: 3500,
      merchant: 'Local Market',
      status: 'completed',
      date: '2024-01-12T00:00:00Z'
    }
  ])

  const columns = [
    { key: 'transactionId', label: 'Transaction ID', sortable: true },
    { key: 'farmerName', label: 'Farmer', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'product', label: 'Product', sortable: true },
    { key: 'quantity', label: 'Quantity', sortable: true },
    { key: 'amount', label: 'Amount', type: 'currency', sortable: true },
    { key: 'merchant', label: 'Merchant', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'date', label: 'Date', type: 'date', sortable: true }
  ]

  const handleView = (transaction) => {
    alert(`Viewing transaction details: ${transaction.transactionId}`)
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Farmer Transactions
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          View and monitor all farmer transactions and payments
        </p>
      </div>

      {/* Transaction Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Total Transactions</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>5,678</p>
          <p style={{ fontSize: '12px', color: '#10b981' }}>+234 this month</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Total Volume</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>₹45,67,890</p>
          <p style={{ fontSize: '12px', color: '#10b981' }}>+12.5% this month</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Pending Payments</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>₹1,25,000</p>
          <p style={{ fontSize: '12px', color: '#f59e0b' }}>15 transactions</p>
        </div>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Average Transaction</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>₹8,045</p>
          <p style={{ fontSize: '12px', color: '#10b981' }}>+5.2% vs last month</p>
        </div>
      </div>

      <DataTable
        data={transactions}
        columns={columns}
        onView={handleView}
        title="Recent Farmer Transactions"
        emptyMessage="No transactions found"
      />
    </div>
  )
}

export default FarmerTransactions