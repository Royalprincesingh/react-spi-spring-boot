import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth, ROLES } from './context/AuthContext';
import Login from './pages/Login';
import DashboardSuper from './pages/DashboardSuper';
import DashboardFarmer from './pages/DashboardFarmerAdmin';
import DashboardProduct from './pages/DashboardProductAdmin';
import PrivateRoute from './components/PrivateRoute';

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link> | <Link to="/super">Super Admin</Link> |{' '}
      <Link to="/farmer">Farmer Admin</Link> | <Link to="/product">Product Admin</Link>
      {user ? (
        <>
          {' '}
          | Logged in as {user.role}{' '}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          {' '}
          | <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />

        {/* Super Admin */}
        <Route element={<PrivateRoute allowedRoles={[ROLES.SUPER_ADMIN]} />}>
          <Route path="/super" element={<DashboardSuper />} />
        </Route>

        {/* Farmer Admin */}
        <Route element={<PrivateRoute allowedRoles={[ROLES.FARMER_ADMIN]} />}>
          <Route path="/farmer" element={<DashboardFarmer />} />
        </Route>

        {/* Product Admin */}
        <Route element={<PrivateRoute allowedRoles={[ROLES.PRODUCT_ADMIN]} />}>
          <Route path="/product" element={<DashboardProduct />} />
        </Route>

        <Route path="/" element={<h2>Welcome to Admin Portal</h2>} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </AuthProvider>
  );
}