import { useMemo } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Dashboard() {
  const { data, currentUser } = useAuth();
  const stats = useMemo(() => ({
    farmers: data.farmers.length,
    merchants: data.merchants.length,
    products: data.products.length,
    orders: data.orders.length,
    transactions: data.transactions.length,
    pendingFarmers: data.farmers.filter((f) => f.status === 'pending').length,
  }), [data]);

  return (
    <div>
      <h2>Welcome, {currentUser?.name}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <Stat title="Farmers" value={stats.farmers} />
        <Stat title="Merchants" value={stats.merchants} />
        <Stat title="Products" value={stats.products} />
        <Stat title="Orders" value={stats.orders} />
        <Stat title="Transactions" value={stats.transactions} />
        <Stat title="Pending Farmers" value={stats.pendingFarmers} />
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
      <div style={{ fontSize: 12, color: '#666' }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 700 }}>{value}</div>
    </div>
  );
}