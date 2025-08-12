import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Organic Wheat', category: 'Grains', price: 2500, stock: 'in_stock', farmer: 'Rajesh Kumar' },
    { id: 2, name: 'Fresh Tomatoes', category: 'Vegetables', price: 80, stock: 'low_stock', farmer: 'Priya Sharma' },
    { id: 3, name: 'Basmati Rice', category: 'Grains', price: 4500, stock: 'in_stock', farmer: 'Amit Singh' }
  ])

  const columns = [
    { key: 'name', label: 'Product Name', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'price', label: 'Price', type: 'currency', sortable: true },
    { key: 'stock', label: 'Stock Status', type: 'status', sortable: true },
    { key: 'farmer', label: 'Farmer', sortable: true }
  ]

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Product Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          View and manage all products
        </p>
      </div>
      <DataTable data={products} columns={columns} title="All Products" />
    </div>
  )
}

export default ProductList