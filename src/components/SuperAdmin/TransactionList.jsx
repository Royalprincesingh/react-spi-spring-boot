import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const TransactionList = () => {
  const [transactions] = useState([
    { id: 1, transactionId: 'TXN-001', type: 'Payment', orderId: 'ORD-001', amount: 25000, status: 'completed', date: '2024-01-15T00:00:00Z' },
    { id: 2, transactionId: 'TXN-002', type: 'Refund', orderId: 'ORD-002', amount: -5000, status: 'processed', date: '2024-01-14T00:00:00Z' },
    { id: 3, transactionId: 'TXN-003', type: 'Payment', orderId: 'ORD-003', amount: 8000, status: 'pending', date: '2024-01-13T00:00:00Z' }
  ])

  const columns = [
    { key: 'transactionId', label: 'Transaction ID', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'orderId', label: 'Order ID', sortable: true },
    { key: 'amount', label: 'Amount', type: 'currency', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'date', label: 'Date', type: 'date', sortable: true }
  ]

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Transaction Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          View and manage all transactions
        </p>
      </div>
      <DataTable data={transactions} columns={columns} title="All Transactions" />
    </div>
  )
}

export default TransactionList