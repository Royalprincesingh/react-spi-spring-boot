import React, { useState } from 'react'
import Layout from '../Shared/Layout'
import FarmerOverview from './FarmerOverview'
import FarmerManagement from './FarmerManagement'
import FarmerTransactions from './FarmerTransactions'
import NotificationCenter from '../Shared/NotificationCenter'

const FarmerAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'farmers', label: 'Farmer Management' },
    { key: 'transactions', label: 'Farmer Transactions' },
    { key: 'notifications', label: 'Approvals' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <FarmerOverview />
      case 'farmers':
        return <FarmerManagement />
      case 'transactions':
        return <FarmerTransactions />
      case 'notifications':
        return <NotificationCenter />
      default:
        return <FarmerOverview />
    }
  }

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      tabs={tabs}
      title="Farmer Admin Dashboard"
    >
      {renderContent()}
    </Layout>
  )
}

export default FarmerAdminDashboard