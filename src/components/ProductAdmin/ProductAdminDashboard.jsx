import React, { useState } from 'react'
import Layout from '../Shared/Layout'
import ProductOverview from './ProductOverview'
import ProductManagement from './ProductManagement'
import StockManagement from './StockManagement'
import OrderManagement from './OrderManagement'
import MerchantManagement from './MerchantManagement'

const ProductAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'products', label: 'Product Management' },
    { key: 'stock', label: 'Stock Management' },
    { key: 'orders', label: 'Order Management' },
    { key: 'merchants', label: 'Merchant Management' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProductOverview />
      case 'products':
        return <ProductManagement />
      case 'stock':
        return <StockManagement />
      case 'orders':
        return <OrderManagement />
      case 'merchants':
        return <MerchantManagement />
      default:
        return <ProductOverview />
    }
  }

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={tabs}
      title="Product Admin Dashboard"
    >
      {renderContent()}
    </Layout>
  )
}

export default ProductAdminDashboard