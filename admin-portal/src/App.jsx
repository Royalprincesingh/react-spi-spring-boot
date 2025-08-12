import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AdminList from './pages/admins/AdminList.jsx';
import FarmerList from './pages/farmers/FarmerList.jsx';
import FarmerApprovals from './pages/farmers/FarmerApprovals.jsx';
import RegisterFarmer from './pages/farmers/RegisterFarmer.jsx';
import MerchantList from './pages/merchants/MerchantList.jsx';
import ProductList from './pages/products/ProductList.jsx';
import OrderList from './pages/orders/OrderList.jsx';
import TransactionList from './pages/transactions/TransactionList.jsx';
import Notifications from './pages/Notifications.jsx';
import { ROLES, ROUTES } from './constants.js';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.FARMER_REGISTER} element={<RegisterFarmer />} />

      <Route element={<ProtectedRoute />}> 
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route element={<ProtectedRoute allowedRoles={[ROLES.SUPER_ADMIN]} />}> 
            <Route path={ROUTES.ADMINS} element={<AdminList />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={[ROLES.SUPER_ADMIN, ROLES.FARMER_ADMIN]} />}> 
            <Route path={ROUTES.FARMERS} element={<FarmerList />} />
            <Route path={ROUTES.FARMER_APPROVALS} element={<FarmerApprovals />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={[ROLES.SUPER_ADMIN, ROLES.OPS_ADMIN]} />}> 
            <Route path={ROUTES.MERCHANTS} element={<MerchantList />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductList />} />
            <Route path={ROUTES.ORDERS} element={<OrderList />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={[ROLES.SUPER_ADMIN, ROLES.FARMER_ADMIN, ROLES.OPS_ADMIN]} />}> 
            <Route path={ROUTES.TRANSACTIONS} element={<TransactionList />} />
          </Route>

          <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  );
}

export default App;
