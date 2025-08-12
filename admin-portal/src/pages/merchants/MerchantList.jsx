import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { updateStorage } from '../../utils/storage.js';

export default function MerchantList() {
  const { data, setData } = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const add = () => {
    if (!name || !phone) return;
    const id = 'm' + (data.merchants.length + 1);
    const next = updateStorage((curr) => {
      curr.merchants = [...curr.merchants, { id, name, phone }];
      return curr;
    });
    setData(next);
    setName(''); setPhone('');
  };

  const remove = (id) => {
    const next = updateStorage((curr) => {
      curr.merchants = curr.merchants.filter((m) => m.id !== id);
      return curr;
    });
    setData(next);
  };

  return (
    <div>
      <h3>Merchant List</h3>
      <table>
        <thead><tr><th>Name</th><th>Phone</th><th></th></tr></thead>
        <tbody>
          {data.merchants.map((m) => (
            <tr key={m.id}><td>{m.name}</td><td>{m.phone}</td><td><button onClick={() => remove(m.id)}>Remove</button></td></tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16 }}>
        <h4>Add Merchant</h4>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />{' '}
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />{' '}
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
}