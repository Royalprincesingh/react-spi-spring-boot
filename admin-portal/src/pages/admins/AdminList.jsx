import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { updateStorage, loadStorage } from '../../utils/storage.js';

export default function AdminList() {
  const { data, setData } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('SUPER_ADMIN');

  const addAdmin = () => {
    if (!name || !email) return;
    const id = 'a' + (data.admins.length + 1);
    const next = updateStorage((curr) => {
      curr.admins = [...curr.admins, { id, name, email, password: '123456', role }];
      return curr;
    });
    setData(next);
    setName(''); setEmail(''); setRole('SUPER_ADMIN');
  };

  const removeAdmin = (id) => {
    const next = updateStorage((curr) => {
      curr.admins = curr.admins.filter((a) => a.id !== id);
      if (curr.currentUser && curr.currentUser.id === id) curr.currentUser = null;
      return curr;
    });
    setData(next);
  };

  return (
    <div>
      <h3>Admin List</h3>
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th></th></tr></thead>
        <tbody>
          {data.admins.map((a) => (
            <tr key={a.id}><td>{a.name}</td><td>{a.email}</td><td>{a.role}</td><td><button onClick={() => removeAdmin(a.id)}>Remove</button></td></tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16 }}>
        <h4>Add Admin</h4>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />{' '}
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />{' '}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="SUPER_ADMIN">SUPER_ADMIN</option>
          <option value="FARMER_ADMIN">FARMER_ADMIN</option>
          <option value="OPS_ADMIN">OPS_ADMIN</option>
        </select>{' '}
        <button onClick={addAdmin}>Add</button>
        <div style={{ fontSize: 12, color: '#666' }}>Default password: 123456</div>
      </div>
    </div>
  );
}