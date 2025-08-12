import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { ROLES, ROUTES } from '../constants.js';

const linkStyle = ({ isActive }) => ({
  display: 'block', padding: '8px 12px', margin: '6px 8px', borderRadius: 6,
  textDecoration: 'none', color: isActive ? '#fff' : '#333', background: isActive ? '#1f6feb' : 'transparent'
});

export default function Sidebar() {
  const { currentUser } = useAuth();

  if (!currentUser) return null;

  return (
    <aside style={{ width: 240, borderRight: '1px solid #eee', paddingTop: 16 }}>
      <div style={{ fontWeight: 700, padding: '0 12px 12px 12px' }}>Admin Portal</div>
      <nav>
        <NavLink to={ROUTES.DASHBOARD} style={linkStyle}>Dashboard</NavLink>
        {currentUser.role === ROLES.SUPER_ADMIN && (
          <>
            <NavLink to={ROUTES.ADMINS} style={linkStyle}>Admin List</NavLink>
            <NavLink to={ROUTES.FARMERS} style={linkStyle}>Farmer List</NavLink>
            <NavLink to={ROUTES.MERCHANTS} style={linkStyle}>Merchant List</NavLink>
            <NavLink to={ROUTES.PRODUCTS} style={linkStyle}>Product List</NavLink>
            <NavLink to={ROUTES.ORDERS} style={linkStyle}>Orders</NavLink>
            <NavLink to={ROUTES.TRANSACTIONS} style={linkStyle}>Transactions</NavLink>
          </>
        )}
        {currentUser.role === ROLES.FARMER_ADMIN && (
          <>
            <NavLink to={ROUTES.FARMERS} style={linkStyle}>Farmer List</NavLink>
            <NavLink to={ROUTES.FARMER_APPROVALS} style={linkStyle}>Approvals</NavLink>
            <NavLink to={ROUTES.TRANSACTIONS} style={linkStyle}>Transactions</NavLink>
          </>
        )}
        {currentUser.role === ROLES.OPS_ADMIN && (
          <>
            <NavLink to={ROUTES.MERCHANTS} style={linkStyle}>Merchant List</NavLink>
            <NavLink to={ROUTES.PRODUCTS} style={linkStyle}>Product/Stock</NavLink>
            <NavLink to={ROUTES.ORDERS} style={linkStyle}>Orders</NavLink>
            <NavLink to={ROUTES.TRANSACTIONS} style={linkStyle}>Transactions</NavLink>
          </>
        )}
      </nav>
      <div style={{ padding: '12px 12px' }}>
        <NavLink to={ROUTES.FARMER_REGISTER} style={linkStyle}>Register Farmer (Public)</NavLink>
      </div>
    </aside>
  );
}