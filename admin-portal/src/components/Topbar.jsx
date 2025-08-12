import { useAuth } from '../context/AuthContext.jsx';

export default function Topbar() {
  const { currentUser, logout } = useAuth();
  if (!currentUser) return null;
  return (
    <header style={{
      height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: '1px solid #eee', padding: '0 16px', background: '#f9fafb'
    }}>
      <div />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span>{currentUser.name} ({currentUser.role})</span>
        <button onClick={logout} style={{ padding: '6px 10px' }}>Logout</button>
      </div>
    </header>
  );
}