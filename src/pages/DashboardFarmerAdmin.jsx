import React, { useState } from 'react';

export default function DashboardFarmerAdmin() {
  const [pendingRegistrations] = useState([{
    id: 1,
    name: 'Farmer John',
  }]);

  const approveFarmer = (id) => {
    alert(`Approved farmer ${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Farmer Admin Dashboard</h2>
      <h3>Pending Farmer Registrations</h3>
      <ul>
        {pendingRegistrations.map((f) => (
          <li key={f.id}>
            {f.name} <button onClick={() => approveFarmer(f.id)}>Approve</button>
          </li>
        ))}
      </ul>

      <h3>All Farmers</h3>
      <ul>
        <li>Farmer 1 - View Details / Transactions</li>
      </ul>
    </div>
  );
}