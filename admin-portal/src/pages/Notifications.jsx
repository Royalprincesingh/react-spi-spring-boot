import { useMemo } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Notifications() {
  const { data } = useAuth();
  const items = useMemo(() => (
    data.notifications.slice().sort((a, b) => b.createdAt - a.createdAt)
  ), [data]);

  return (
    <div>
      <h3>Notifications</h3>
      {items.length === 0 ? <div>No notifications</div> : (
        <ul>
          {items.map((n) => (
            <li key={n.id}>{n.message} — {new Date(n.createdAt).toLocaleString()}</li>
          ))}
        </ul>
      )}
    </div>
  );
}