import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { updateStorage } from '../../utils/storage.js';

export default function FarmerList() {
  const { data, setData } = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addPendingFarmer = () => {
    if (!name || !phone) return;
    const id = 'f' + (data.farmers.length + 1);
    const next = updateStorage((curr) => {
      curr.farmers = [...curr.farmers, { id, name, phone, status: 'pending', totalTransactions: 0 }];
      curr.notifications = [
        ...curr.notifications,
        { id: 'n' + (curr.notifications.length + 1), type: 'farmer_registration', farmerId: id, message: `New farmer ${name} awaiting approval`, createdAt: Date.now() }
      ];
      return curr;
    });
    setData(next);
    setName(''); setPhone('');
  };

  const approve = (id) => {
    const next = updateStorage((curr) => {
      curr.farmers = curr.farmers.map((f) => f.id === id ? { ...f, status: 'approved' } : f);
      return curr;
    });
    setData(next);
  };

  const reject = (id) => {
    const next = updateStorage((curr) => {
      curr.farmers = curr.farmers.filter((f) => f.id !== id);
      curr.notifications = curr.notifications.filter((n) => n.farmerId !== id);
      return curr;
    });
    setData(next);
  };

  return (
    <div>
      <h3>Farmer List</h3>
      <table>
        <thead><tr><th>Name</th><th>Phone</th><th>Status</th><th>Transactions</th><th>Actions</th></tr></thead>
        <tbody>
          {data.farmers.map((f) => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.phone}</td>
              <td>{f.status}</td>
              <td>{f.totalTransactions}</td>
              <td>
                {f.status === 'pending' ? (
                  <>
                    <button onClick={() => approve(f.id)}>Approve</button>{' '}
                    <button onClick={() => reject(f.id)}>Reject</button>
                  </>
                ) : (
                  <span>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16 }}>
        <h4>Add Farmer (simulates registration)</h4>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />{' '}
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />{' '}
        <button onClick={addPendingFarmer}>Add Pending</button>
      </div>
    </div>
  );
}