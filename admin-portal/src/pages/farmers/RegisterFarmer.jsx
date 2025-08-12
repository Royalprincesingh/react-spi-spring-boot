import { useState } from 'react';
import { updateStorage } from '../../utils/storage.js';

export default function RegisterFarmer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    const next = updateStorage((curr) => {
      const id = 'f' + (curr.farmers.length + 1);
      curr.farmers = [...curr.farmers, { id, name, phone, status: 'pending', totalTransactions: 0 }];
      curr.notifications = [
        ...curr.notifications,
        { id: 'n' + (curr.notifications.length + 1), type: 'farmer_registration', farmerId: id, message: `New farmer ${name} awaiting approval`, createdAt: Date.now() }
      ];
      return curr;
    });
    setDone(true);
    setName(''); setPhone('');
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={submit} style={{ width: 380, padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
        <h3>Farmer Registration</h3>
        {done && <div style={{ color: 'green', marginBottom: 8 }}>Submitted! Farmer admin will review shortly.</div>}
        <div style={{ marginBottom: 12 }}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" style={{ width: '100%' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10 }}>Submit</button>
      </form>
    </div>
  );
}