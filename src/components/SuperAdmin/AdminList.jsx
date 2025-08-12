import React, { useState } from 'react'
import DataTable from '../Shared/DataTable'
import { Plus, Shield, User } from 'lucide-react'

const AdminList = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedAdmin, setSelectedAdmin] = useState(null)

  // Demo admin data
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: 'Super Admin',
      email: 'superadmin@admin.com',
      role: 'super_admin',
      status: 'active',
      lastLogin: '2024-01-15T10:30:00Z',
      createdAt: '2023-01-01T00:00:00Z',
      permissions: ['all']
    },
    {
      id: 2,
      name: 'Farmer Admin',
      email: 'farmeradmin@admin.com',
      role: 'farmer_admin',
      status: 'active',
      lastLogin: '2024-01-15T09:15:00Z',
      createdAt: '2023-02-15T00:00:00Z',
      permissions: ['farmer_management', 'farmer_transactions']
    },
    {
      id: 3,
      name: 'Product Admin',
      email: 'productadmin@admin.com',
      role: 'product_admin',
      status: 'active',
      lastLogin: '2024-01-15T08:45:00Z',
      createdAt: '2023-03-10T00:00:00Z',
      permissions: ['product_management', 'stock_management', 'order_management', 'merchant_management']
    },
    {
      id: 4,
      name: 'John Smith',
      email: 'john.smith@admin.com',
      role: 'farmer_admin',
      status: 'inactive',
      lastLogin: '2024-01-10T14:20:00Z',
      createdAt: '2023-06-20T00:00:00Z',
      permissions: ['farmer_management']
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@admin.com',
      role: 'product_admin',
      status: 'active',
      lastLogin: '2024-01-14T16:30:00Z',
      createdAt: '2023-08-05T00:00:00Z',
      permissions: ['product_management', 'stock_management']
    }
  ])

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'status', label: 'Status', type: 'status', sortable: true },
    { key: 'lastLogin', label: 'Last Login', type: 'date', sortable: true },
    { key: 'createdAt', label: 'Created At', type: 'date', sortable: true }
  ]

  const handleView = (admin) => {
    setSelectedAdmin(admin)
  }

  const handleEdit = (admin) => {
    setSelectedAdmin(admin)
    setShowAddModal(true)
  }

  const handleDelete = (admin) => {
    if (window.confirm(`Are you sure you want to delete ${admin.name}?`)) {
      setAdmins(prev => prev.filter(a => a.id !== admin.id))
    }
  }

  const handleAddAdmin = () => {
    setSelectedAdmin(null)
    setShowAddModal(true)
  }

  const handleSaveAdmin = (adminData) => {
    if (selectedAdmin) {
      // Edit existing admin
      setAdmins(prev => prev.map(admin => 
        admin.id === selectedAdmin.id 
          ? { ...admin, ...adminData }
          : admin
      ))
    } else {
      // Add new admin
      const newAdmin = {
        id: Date.now(),
        ...adminData,
        createdAt: new Date().toISOString(),
        lastLogin: null
      }
      setAdmins(prev => [...prev, newAdmin])
    }
    setShowAddModal(false)
    setSelectedAdmin(null)
  }

  const getRolePermissions = (role) => {
    switch (role) {
      case 'super_admin':
        return ['all']
      case 'farmer_admin':
        return ['farmer_management', 'farmer_transactions', 'farmer_approvals']
      case 'product_admin':
        return ['product_management', 'stock_management', 'order_management', 'merchant_management']
      default:
        return []
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
            Admin Management
          </h2>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            Manage admin accounts and their permissions
          </p>
        </div>
        <button
          onClick={handleAddAdmin}
          style={{
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = '#4338ca'}
          onMouseLeave={(e) => e.target.style.background = '#4f46e5'}
        >
          <Plus size={16} />
          Add New Admin
        </button>
      </div>

      {/* Admin Table */}
      <DataTable
        data={admins}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        title="Admin Accounts"
        emptyMessage="No admin accounts found"
      />

      {/* Admin Details Modal */}
      {selectedAdmin && !showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '32px',
            width: '600px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                {selectedAdmin.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
                  {selectedAdmin.name}
                </h3>
                <p style={{ color: '#6b7280' }}>{selectedAdmin.email}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px', display: 'block' }}>
                  Role
                </label>
                <div style={{
                  background: '#f3f4f6',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}>
                  {selectedAdmin.role.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </div>
              </div>
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px', display: 'block' }}>
                  Status
                </label>
                <span style={{
                  background: selectedAdmin.status === 'active' ? '#10b981' : '#ef4444',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {selectedAdmin.status.toUpperCase()}
                </span>
              </div>
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px', display: 'block' }}>
                  Last Login
                </label>
                <div style={{
                  background: '#f3f4f6',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}>
                  {selectedAdmin.lastLogin ? new Date(selectedAdmin.lastLogin).toLocaleDateString() : 'Never'}
                </div>
              </div>
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px', display: 'block' }}>
                  Created At
                </label>
                <div style={{
                  background: '#f3f4f6',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}>
                  {new Date(selectedAdmin.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                Permissions
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedAdmin.permissions.map((permission, index) => (
                  <span
                    key={index}
                    style={{
                      background: '#e0e7ff',
                      color: '#4338ca',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {permission.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedAdmin(null)}
                style={{
                  background: '#6b7280',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowAddModal(true)
                }}
                style={{
                  background: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Edit Admin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Admin Modal */}
      {showAddModal && (
        <AdminForm
          admin={selectedAdmin}
          onSave={handleSaveAdmin}
          onCancel={() => {
            setShowAddModal(false)
            setSelectedAdmin(null)
          }}
        />
      )}
    </div>
  )
}

// Admin Form Component
const AdminForm = ({ admin, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: admin?.name || '',
    email: admin?.email || '',
    role: admin?.role || 'farmer_admin',
    status: admin?.status || 'active',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitData = { ...formData }
    if (!submitData.password && admin) {
      delete submitData.password // Don't update password if not provided for existing admin
    }
    
    // Set permissions based on role
    submitData.permissions = getRolePermissions(submitData.role)
    
    onSave(submitData)
  }

  const getRolePermissions = (role) => {
    switch (role) {
      case 'super_admin':
        return ['all']
      case 'farmer_admin':
        return ['farmer_management', 'farmer_transactions', 'farmer_approvals']
      case 'product_admin':
        return ['product_management', 'stock_management', 'order_management', 'merchant_management']
      default:
        return []
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '32px',
        width: '500px',
        maxHeight: '80vh',
        overflow: 'auto'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
          {admin ? 'Edit Admin' : 'Add New Admin'}
        </h3>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
              Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
              Role *
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            >
              <option value="farmer_admin">Farmer Admin</option>
              <option value="product_admin">Product Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
              Status *
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
              Password {!admin && '*'}
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              required={!admin}
              placeholder={admin ? 'Leave blank to keep current password' : 'Enter password'}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
              Permissions (Based on Role)
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {getRolePermissions(formData.role).map((permission, index) => (
                <span
                  key={index}
                  style={{
                    background: '#e0e7ff',
                    color: '#4338ca',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}
                >
                  {permission.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onCancel}
              style={{
                background: '#6b7280',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                background: '#4f46e5',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {admin ? 'Update Admin' : 'Create Admin'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminList