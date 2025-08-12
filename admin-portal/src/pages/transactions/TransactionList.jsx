import { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function TransactionList() {
  const { data } = useAuth();
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    return data.transactions
      .map((t) => ({
        ...t,
        label: t.type === 'farmer'
          ? `Farmer: ${data.farmers.find((f) => f.id === t.farmerId)?.name || t.farmerId}`
          : `Order: ${t.orderId}`,
      }))
      .filter((t) => t.label.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [data, query]);

  return (
    <div>
      <h3>Transactions</h3>
      <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <table>
        <thead><tr><th>ID</th><th>Type</th><th>Label</th><th>Amount</th><th>Date</th></tr></thead>
        <tbody>
          {items.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.type}</td>
              <td>{t.label}</td>
              <td>{t.amount}</td>
              <td>{new Date(t.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}