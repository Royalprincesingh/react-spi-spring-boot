import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const StockManagement = () => {
  const [stockItems] = useState([
    { id: 1, product: 'Organic Wheat', currentStock: 150, minStock: 50, maxStock: 300, status: 'in_stock', lastUpdated: '2024-01-15T00:00:00Z' },
    { id: 2, product: 'Fresh Tomatoes', currentStock: 5, minStock: 20, maxStock: 100, status: 'low_stock', lastUpdated: '2024-01-14T00:00:00Z' },
    { id: 3, product: 'Basmati Rice', currentStock: 200, minStock: 75, maxStock: 400, status: 'in_stock', lastUpdated: '2024-01-13T00:00:00Z' },
    { id: 4, product: 'Organic Carrots', currentStock: 0, minStock: 25, maxStock: 150, status: 'out_of_stock', lastUpdated: '2024-01-12T00:00:00Z' }
  ])

  const columns = [
    { key: 'product', label: 'Product', sortable: true },
    { key: 'currentStock', label: 'Current Stock', sortable: true },
    { key: 'minStock', label: 'Min Stock', sortable: true },
    { key: 'maxStock', label: 'Max Stock', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'lastUpdated', label: 'Last Updated', type: 'date', sortable: true }
  ]

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Stock Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          Monitor and manage inventory levels
        </p>
      </div>
      <DataTable data={stockItems} columns={columns} title="Stock Levels" />
    </div>
  )
}

export default StockManagement