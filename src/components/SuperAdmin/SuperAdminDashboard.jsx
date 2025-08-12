import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../Shared/Layout'
import Overview from './Overview'
import AdminList from './AdminList'
import FarmerList from './FarmerList'
import ProductList from './ProductList'
import MerchantList from './MerchantList'
import OrderList from './OrderList'
import TransactionList from './TransactionList'
import NotificationCenter from '../Shared/NotificationCenter'

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'admins', label: 'Admin Management' },
    { key: 'farmers', label: 'Farmer Management' },
    { key: 'products', label: 'Product Management' },
    { key: 'merchants', label: 'Merchant Management' },
    { key: 'orders', label: 'Order Management' },
    { key: 'transactions', label: 'Transactions' },
    { key: 'notifications', label: 'Notifications' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />
      case 'admins':
        return <AdminList />
      case 'farmers':
        return <FarmerList />
      case 'products':
        return <ProductList />
      case 'merchants':
        return <MerchantList />
      case 'orders':
        return <OrderList />
      case 'transactions':
        return <TransactionList />
      case 'notifications':
        return <NotificationCenter />
      default:
        return <Overview />
    }
  }

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={tabs}
      title="Super Admin Dashboard"
    >
      {renderContent()}
    </Layout>
  )
}

export default SuperAdminDashboard