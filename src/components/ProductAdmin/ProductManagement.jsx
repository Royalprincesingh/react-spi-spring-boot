import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'

const ProductManagement = () => {
  const [products] = useState([
    { id: 1, name: 'Organic Wheat', category: 'Grains', price: 2500, stock: 'in_stock', farmer: 'Rajesh Kumar', rating: 4.5 },
    { id: 2, name: 'Fresh Tomatoes', category: 'Vegetables', price: 80, stock: 'low_stock', farmer: 'Priya Sharma', rating: 4.2 },
    { id: 3, name: 'Basmati Rice', category: 'Grains', price: 4500, stock: 'in_stock', farmer: 'Amit Singh', rating: 4.8 },
    { id: 4, name: 'Organic Carrots', category: 'Vegetables', price: 60, stock: 'out_of_stock', farmer: 'Sunita Devi', rating: 4.0 }
  ])

  const columns = [
    { key: 'name', label: 'Product Name', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'price', label: 'Price', type: 'currency', sortable: true },
    { key: 'stock', label: 'Stock Status', type: 'status', sortable: true },
    { key: 'farmer', label: 'Farmer', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true }
  ]

  const handleView = (product) => {
    alert(`Viewing product: ${product.name}`)
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
          Product Management
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          Manage all products, pricing, and availability
        </p>
      </div>
      <DataTable data={products} columns={columns} onView={handleView} title="All Products" />
    </div>
  )
}

export default ProductManagement