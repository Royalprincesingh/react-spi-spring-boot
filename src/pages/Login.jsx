import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, ROLES } from '../context/AuthContext';

export default function Login() {
  const [role, setRole] = useState(ROLES.SUPER_ADMIN);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select Role to Login</h2>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={ROLES.SUPER_ADMIN}>Super Admin</option>
          <option value={ROLES.FARMER_ADMIN}>Farmer Admin</option>
          <option value={ROLES.PRODUCT_ADMIN}>Product Admin</option>
        </select>
        <button type="submit" style={{ marginLeft: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
}