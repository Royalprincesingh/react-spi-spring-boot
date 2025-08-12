import { ROLES } from '../constants.js';

export function createSeedData() {
  const now = Date.now();
  return {
    admins: [
      { id: 'a1', name: 'Super Admin', email: 'super@admin.com', password: '123456', role: ROLES.SUPER_ADMIN },
      { id: 'a2', name: 'Farmer Admin', email: 'farmer@admin.com', password: '123456', role: ROLES.FARMER_ADMIN },
      { id: 'a3', name: 'Ops Admin', email: 'ops@admin.com', password: '123456', role: ROLES.OPS_ADMIN },
    ],
    farmers: [
      { id: 'f1', name: 'Ramesh', phone: '9990001111', status: 'approved', totalTransactions: 3 },
      { id: 'f2', name: 'Suresh', phone: '9990002222', status: 'pending', totalTransactions: 0 },
    ],
    merchants: [
      { id: 'm1', name: 'City Merchant', phone: '8881112222' },
      { id: 'm2', name: 'Rural Merchant', phone: '8882223333' },
    ],
    products: [
      { id: 'p1', name: 'Wheat', stock: 120, price: 20 },
      { id: 'p2', name: 'Rice', stock: 80, price: 30 },
    ],
    orders: [
      { id: 'o1', productId: 'p1', quantity: 10, merchantId: 'm1', status: 'completed', createdAt: now - 86400000 },
      { id: 'o2', productId: 'p2', quantity: 5, merchantId: 'm2', status: 'pending', createdAt: now },
    ],
    transactions: [
      { id: 't1', type: 'farmer', farmerId: 'f1', amount: 2000, createdAt: now - 172800000 },
      { id: 't2', type: 'order', orderId: 'o1', amount: 200, createdAt: now - 86400000 },
    ],
    notifications: [
      { id: 'n1', type: 'farmer_registration', farmerId: 'f2', message: 'New farmer Suresh awaiting approval', createdAt: now },
    ],
    currentUser: null,
  };
}