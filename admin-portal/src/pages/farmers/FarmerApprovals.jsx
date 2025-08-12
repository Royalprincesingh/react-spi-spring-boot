import { useAuth } from '../../context/AuthContext.jsx';
import { updateStorage } from '../../utils/storage.js';

export default function FarmerApprovals() {
  const { data, setData } = useAuth();
  const pending = data.farmers.filter((f) => f.status === 'pending');

  const approve = (id) => {
    const next = updateStorage((curr) => {
      curr.farmers = curr.farmers.map((f) => f.id === id ? { ...f, status: 'approved' } : f);
      curr.notifications = curr.notifications.filter((n) => n.farmerId !== id);
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
      <h3>Farmer Approvals</h3>
      {pending.length === 0 ? <div>No pending approvals</div> : (
        <table>
          <thead><tr><th>Name</th><th>Phone</th><th>Actions</th></tr></thead>
          <tbody>
            {pending.map((f) => (
              <tr key={f.id}>
                <td>{f.name}</td>
                <td>{f.phone}</td>
                <td>
                  <button onClick={() => approve(f.id)}>Approve</button>{' '}
                  <button onClick={() => reject(f.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}