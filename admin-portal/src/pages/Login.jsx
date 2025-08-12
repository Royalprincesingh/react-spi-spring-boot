import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { ROUTES } from '../constants.js';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('super@admin.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={onSubmit} style={{ width: 360, padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
        <h2>Admin Login</h2>
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" style={{ width: '100%' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
        <p style={{ marginTop: 12, fontSize: 12 }}>Demo users: super@admin.com, farmer@admin.com, ops@admin.com (password 123456)</p>
      </form>
    </div>
  );
}